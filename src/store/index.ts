import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './slices/main.slice'
import { mainApi } from './api/main.api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    main: mainSlice,
    [mainApi.reducerPath]: mainApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch