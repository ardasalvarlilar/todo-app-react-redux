import { createSlice } from '@reduxjs/toolkit'
import { todoSlice } from './todoSlice';
console.log(todoSlice)

export const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    pushList: (state,action) => {
      state.push(...state,action.payload)
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
    checkTodo: (state, action) => {
      const index = action.payload;
      state[index].isCompleted = !state[index].isCompleted;
    },
  }
})

export const { pushList,deleteTodo,checkTodo } = listSlice.actions

export default listSlice.reducer