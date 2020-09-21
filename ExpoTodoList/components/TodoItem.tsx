//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
//------------------------------------------------------------------------------

import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Text, ToggleButton } from "react-native-paper";

type TodoItemProps = {
  title: string;
  dateCreated: Date;
  description?: string;
  dateCompleted?: Date;
};

const TodoItem = (props: TodoItemProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedBoxIcon, uncheckedBoxIcon] = [
    "checkbox-marked-circle-outline",
    "checkbox-blank-circle-outline",
  ];

  return (
    <View style={styles.horizontalAlign}>
      <ToggleButton
        icon={isChecked ? checkedBoxIcon : uncheckedBoxIcon}
        value="checkbox"
        onPress={() => setIsChecked(!isChecked)}
      />
      <View>
        <Text style={isChecked ? styles.strikedText : styles.normalText}>
          {props.title}
        </Text>
        <Caption>{props.description}</Caption>
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
