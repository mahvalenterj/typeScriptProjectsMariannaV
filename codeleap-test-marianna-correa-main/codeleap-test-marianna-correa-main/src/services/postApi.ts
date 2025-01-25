import axios from 'axios'
import { PostInput, PostUpdateInput } from '../store/slices/posts'

const fetchPosts = async (offset: number) => {
  const url = 'https://dev.codeleap.co.uk/careers/'
  const query = {
    limit: 5,
    offset,
  }
  try {
    const response = await axios.get(url, {
      params: query,
    })
    return response.data.results
  } catch (error) {
    throw new Error()
  }
}

const createPost = async ({ content, title, username }: PostInput) => {
  const newPost = {
    username,
    title,
    content,
  }
  try {
    const res = await axios.post(`https://dev.codeleap.co.uk/careers/`, newPost)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const updatePost = async (data: PostUpdateInput) => {
  const body = {
    title: data.title,
    content: data.content,
  }

  try {
    const res = await axios.patch(
      `https://dev.codeleap.co.uk/careers/${data.id}/`,
      body,
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const deletePost = async (id: number) => {
  try {
    const res = await axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`)

    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const postApi = {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
}
