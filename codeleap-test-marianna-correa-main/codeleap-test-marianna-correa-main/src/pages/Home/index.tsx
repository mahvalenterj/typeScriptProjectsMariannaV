/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Form } from './components/Form'
import { Post } from './components/Post'
import { HomeContainer, Sentinel } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { useSelector } from 'react-redux'
import { postsState, setPostsList } from '../../store/slices/posts'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { postApi } from '../../services/postApi'
import { ThreeDots } from 'react-loader-spinner'

export function Home() {
  const dispatch = useAppDispatch()
  const { posts } = useSelector(postsState)

  const [currentOffset, setCurrentOffset] = useState(0)
  const [loadingPosts, setLoadingPosts] = useState(false)

  useEffect(() => {
    async function getData() {
      const res = await postApi.fetchPosts(currentOffset)

      setLoadingPosts(true)
      setTimeout(() => {
        dispatch(setPostsList([...posts, ...res]))
        setLoadingPosts(false)
      }, 1000 * 2)
    }
    getData()
  }, [currentOffset, dispatch])

  useEffect(() => {
    const observer = document.querySelector('#observer')
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentOffset((state) => state + 5)
      }
    })

    observer && intersectionObserver.observe(observer)

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <HomeContainer>
      <Form />

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            content={post.content}
            created_datetime={
              post.created_datetime &&
              formatDistanceToNow(new Date(post.created_datetime), {
                addSuffix: true,
              })
            }
            username={post.username}
            title={post.title}
          />
        )
      })}
      <Sentinel id="observer">
        {loadingPosts ? (
          <ThreeDots height="50" width="50" color="#7695EC" />
        ) : null}
      </Sentinel>
    </HomeContainer>
  )
}
