//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
// adapted from:
//   https://redux-toolkit.js.org/tutorials/intermediate-tutorial
//------------------------------------------------------------------------------

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoItem } from "../../models/todoItem";

const initialState: Array<todoItem> = [];
let nextTodoItemID = 0;

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<todoItem>) {
        state.push(action.payload);
      },
      prepare(title: string, description?: string) {
        return {
          payload: {
            id: nextTodoItemID++,
            title: title,
            completed: false,
            description: description ?? "",
            dateCreated: new Date().toISOString(),
            dateCompleted: "",
          } as todoItem,
        };
      },
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state = state.filter((todo) => todo.id !== action.payload);
    },
  },
});

const { actions, reducer } = todosSlice;

export const { addTodo, toggleTodo, deleteTodo } = actions;

export default reducer;
