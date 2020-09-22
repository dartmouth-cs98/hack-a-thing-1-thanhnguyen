//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
//------------------------------------------------------------------------------

import * as React from "react";
import { StyleSheet, View } from "react-native";
import { todoItem } from "../models/todoItem";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<todoItem>;
};

const TodoList = (props: TodoListProps): JSX.Element => {
  const todosCopy = [...props.todos];

  const sortedTodos = todosCopy
    //.sort()
    .map((todo) => {
      return <TodoItem key={todo.id} todo={todo} />;
    });
  return <View style={styles.container}>{sortedTodos}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoList;
