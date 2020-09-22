//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
//------------------------------------------------------------------------------

import * as React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import AddTodo from "../components/AddTodo";
import Background from "../components/Background";
import TodoList from "../components/TodoList";
import { todoItem } from "../models/todoItem";
import { RootState } from "../store/appStore";

const TodoListScreen = (): JSX.Element => {
  const title = "My Todo List";
  const todoItems: Array<todoItem> = useSelector(
    (state: RootState) => state.todos
  );

  return (
    <Background style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TodoList todos={todoItems} />
      <AddTodo />
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 16,
    justifyContent: "flex-start",
    flex: 1,
  },
});

export default TodoListScreen;
