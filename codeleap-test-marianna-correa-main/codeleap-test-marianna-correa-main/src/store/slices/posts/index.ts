import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postApi } from '../../../services/postApi'
import { RootState } from '../..'

export interface PostProps {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export interface PostInput {
  title: string
  content: string
  username: string
}

export interface PostUpdateInput {
  title: string
  content: string
  id: number
}

export interface PostsState {
  posts: PostProps[]
}

const initialState: PostsState = {
  posts: [],
}

export const createPost = createAsyncThunk(
  `posts/createPost`,
  async ({ username, title, content }: PostInput) => {
    const res = await postApi.createPost({ username, title, content })
    if (res) {
      return res
    }
  },
)

export const updatePost = createAsyncThunk(
  `posts/updatePost`,
  async (data: PostUpdateInput) => {
    const res = await postApi.updatePost(data)

    return res
  },
)

export const deletePost = createAsyncThunk(
  `posts/deletePost`,
  async (id: number) => {
    await postApi.deletePost(id)

    return id
  },
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsList: (state, action: PayloadAction<PostProps[]>) => {
      state.posts = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload as PostProps)
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const { id, title, content } = action.payload
        const selectedPost = state.posts.find((post) => post.id === id)
        if (selectedPost) {
          selectedPost.title = title
          selectedPost.content = content
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(({ id }) => id !== action.payload)
      })
  },
})

export const { setPostsList } = postsSlice.actions

export const postsState = (state: RootState) => state.posts

export default postsSlice.reducer
