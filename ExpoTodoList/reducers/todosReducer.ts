//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
// adapted from:
//   https://redux-toolkit.js.org/api/createReducer
//------------------------------------------------------------------------------
import { createReducer } from '@reduxjs/toolkit';
import { addTodoItem } from '../actions/todosActions';
import { todoItem } from '../models/todoItem';

const initialState = {
  items: Array<todoItem>(),
  rejectedActions: 0,
  unhandledActions: 0
};

export const todosReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTodoItem, (state, action) => {
      state.items.push(action.payload);
    })
    .addDefaultCase(state => {
      state.unhandledActions++;
    });
});
