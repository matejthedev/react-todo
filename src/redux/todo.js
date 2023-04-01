import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      const todoToToggle = state.find((todo) => todo.id === action.payload);
      if (todoToToggle) {
        todoToToggle.done = !todoToToggle.done;
      }
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todosSlice.actions;

export default todosSlice.reducer;
