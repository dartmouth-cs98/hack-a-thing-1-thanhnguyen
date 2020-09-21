//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
// adapted from:
//   https://redux-toolkit.js.org/api/configureStore#full-example
//------------------------------------------------------------------------------

import * as React from "react";
import { View as DefaultView } from "react-native";
import { useTheme } from "react-native-paper";

export type ViewProps = DefaultView["props"];

const Background = (props: ViewProps): JSX.Element => {
  const theme = useTheme();
  const backgroundColor = theme.colors.background;
  return <DefaultView style={[{ backgroundColor }]} {...props} />;
};

export default Background;
