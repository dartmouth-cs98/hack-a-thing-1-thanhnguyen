//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
// adapted from:
//   https://callstack.github.io/react-native-paper/theming.html
//------------------------------------------------------------------------------
import { DefaultTheme } from 'react-native-paper';

export const PaperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498DB',
    accent: '#FF9458',
  },
};
