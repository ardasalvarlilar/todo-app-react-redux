import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState :{
    isCompleted: false,
    text: ''
  },
  reducers: {
    getTodo: (state,action) => {
      state.isCompleted = false,
      state.text = action.payload
    },
  },
})





// Action creators are generated for each case reducer function
export const { getTodo } = todoSlice.actions

export default todoSlice.reducer