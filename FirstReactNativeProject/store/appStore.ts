//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
// adapted from:
//   https://redux-toolkit.js.org/api/configureStore#full-example
//------------------------------------------------------------------------------
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/rootReducer';

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were composed together
export const appStore = configureStore({
  reducer: rootReducer
});
