import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user/index'
import postsSlice from './slices/posts/index'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'user',
  storage,
}

const persistedUser = persistReducer(persistConfig, userSlice)

export const store = configureStore({
  reducer: {
    user: persistedUser,
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
