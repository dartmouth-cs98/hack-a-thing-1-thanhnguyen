//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
//------------------------------------------------------------------------------

export type todoItem = {
  title: string,
  completed: boolean,
  description: string,
  dateCreated: Date,
  dateCompleted: Date | null,
};
