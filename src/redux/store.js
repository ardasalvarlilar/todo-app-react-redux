import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
import listSlice from './listSlice'

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    list: listSlice
  },
})