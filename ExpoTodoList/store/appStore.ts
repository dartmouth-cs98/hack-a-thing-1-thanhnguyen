//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
// adapted from:
//   https://redux-toolkit.js.org/usage/usage-guide#simplifying-store-setup-with-configurestore
//------------------------------------------------------------------------------
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todoList/todoListSlice";

export const appStore = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
