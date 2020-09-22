//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
//------------------------------------------------------------------------------

import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Text, ToggleButton } from "react-native-paper";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todoList/todoListSlice";
import { todoItem } from "../models/todoItem";

type TodoItemProps = {
  todo: todoItem;
};

const TodoItem = (props: TodoItemProps): JSX.Element => {
  const isCompleted = props.todo.completed;
  const [checkedBoxIcon, uncheckedBoxIcon] = [
    "checkbox-marked-circle-outline",
    "checkbox-blank-circle-outline",
  ];

  const dispatch = useDispatch();
  const dispatchToggleTodo = () => {
    dispatch(toggleTodo(props.todo.id));
  };

  return (
    <View style={styles.horizontalAlign}>
      <ToggleButton
        icon={isCompleted ? checkedBoxIcon : uncheckedBoxIcon}
        value="checkbox"
        onPress={dispatchToggleTodo}
      />
      <View>
        <Text style={isCompleted ? styles.strikedText : styles.normalText}>
          {props.todo.title}
        </Text>
        <Caption>{props.todo.description}</Caption>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalAlign: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  verticalAlign: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  normalText: {
    fontSize: 17,
  },
  strikedText: {
    fontSize: 17,
    textDecorationLine: "line-through",
  },
});

export default TodoItem;
