import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";
import viewReducer from "./view";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    view: viewReducer,
  },
});

export default store;
