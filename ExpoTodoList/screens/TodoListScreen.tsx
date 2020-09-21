//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
// adapted from:
//   https://redux-toolkit.js.org/api/configureStore#full-example
//------------------------------------------------------------------------------

import * as React from "react";
import { StyleSheet } from "react-native";
import Background from "../components/Background";
import TodoItem from "../components/TodoItem";

const TodoListScreen = (): JSX.Element => {
  return (
    <Background style={styles.container}>
      <TodoItem
        title={"testtitle"}
        dateCreated={new Date()}
        description={"testdescription test description"}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default TodoListScreen;
