//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
//------------------------------------------------------------------------------

import * as React from "react";
import { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { FAB, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoList/todoListSlice";

const AddTodo = (): JSX.Element => {
  const textInputLabel = "Task Title";
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const dispatchAddTodo = (title: string, description: string) => {
    dispatch(addTodo(title, description));
  };

  const onAdd = () => {
    if (!text.trim()) {
      return;
    }
    dispatchAddTodo(text, "");
    setText("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.horizontalAlign}>
      <FAB style={styles.fab} small icon="plus" onPress={onAdd} />
      <TextInput
        placeholder={textInputLabel}
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    marginRight: 16,
    marginTop: 8,
  },
  horizontalAlign: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
  },
});

export default AddTodo;
