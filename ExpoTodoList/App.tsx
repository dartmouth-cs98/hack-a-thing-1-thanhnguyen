//------------------------------------------------------------------------------
// @author: Thanh Nguyen Jr, Dartmouth College, Fall 2020
//
// For CS98 with Professor Tim Tregubov
// adapted from:
//   https://redux-toolkit.js.org/api/configureStore#full-example
//------------------------------------------------------------------------------

import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as StoreProvider } from "react-redux";
import { PaperTheme } from "./constants/PaperTheme";
import useCachedResources from "./hooks/useCachedResources";
import TodoListScreen from "./screens/TodoListScreen";
import { appStore } from "./store/appStore";

const App = (): JSX.Element | null => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider store={appStore}>
        <PaperProvider theme={PaperTheme}>
          <SafeAreaProvider>
            <StatusBar />
            <TodoListScreen />
          </SafeAreaProvider>
        </PaperProvider>
      </StoreProvider>
    );
  }
};

export default App;
