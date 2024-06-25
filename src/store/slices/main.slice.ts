import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPostData, IPostsData } from '../../interfaces/MainInterface'

export interface IMainState {
  currentPost?: number;
  favoritePosts?: IPostsData;
}

const initialState: IMainState = {
  currentPost: undefined,
  favoritePosts: undefined,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCurrentPost: (state, action: PayloadAction<number>) => {
      state.currentPost = action.payload
    },
    addToFavoritePosts: (state, action: PayloadAction<IPostData>) => {
      state.favoritePosts?.push(action.payload); 
    },
    removeFromFavoritePosts: (state, action: PayloadAction<number>) => {
      state.favoritePosts = state.favoritePosts?.filter((elem) => elem.id !== action.payload); 
    },
  },
})

export const { setCurrentPost, addToFavoritePosts } = mainSlice.actions

export default mainSlice.reducer