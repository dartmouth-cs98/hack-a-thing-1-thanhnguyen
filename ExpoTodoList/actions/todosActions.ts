//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
// adapted from:
//   https://redux-toolkit.js.org/api/createReducer
//------------------------------------------------------------------------------
import { createAction } from '@reduxjs/toolkit';
import { todoItem } from '../models/todoItem';

export const addTodoItem = createAction(
  'ADD_TODO_ITEM',
  (title: string, description: string) => {
    return {
      payload: {
        title: title,
        completed: false,
        description: description,
        dateCreated: new Date(),
        dateCompleted: null
      } as todoItem
    };
  }
);
