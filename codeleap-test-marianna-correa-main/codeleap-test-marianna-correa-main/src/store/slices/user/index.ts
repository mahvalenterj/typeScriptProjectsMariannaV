import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../..'

export interface User {
  user: string
}

const initialState: User = {
  user: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<User>) => {
      state.user = action.payload.user
    },
  },
})

export const selectedUser = (state: RootState) => state.user

export const { setUsername } = userSlice.actions

export default userSlice.reducer
