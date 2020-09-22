# Hack 1

## Author: Thanh Nguyen Jr, Dartmouth College '21

### Description

This is an Expo project meant to explore development of a mobile app using React Native, Redux, and other technologies.
I started to make a todo list mobile application. It supports adding items and sorts the items by their completion status. There is a check box to toggle whether an item is completed or not completed.

![Image of the App on iPhone](https://github.com/dartmouth-cs98/hack-a-thing-1-thanhnguyen/edit/master/ExpoTodoListScreenshot.png)

The archive is boiler plate code for react-navigation that I ended up not using, but I learned a lot from.

### Usage

To run the app:
- move to the TodoListNative directory
- get the expo command line interface (cli): `npm i expo-cli`
- run `expo start`
- get the expo app on ios or android
- scan the QR code given from the expo cli
- the expo project should run on your mobile device!
NOTE: an updated version of Node is required.

### Learnings

- How to setup a Expo project and run it on phone
  - Selected the minimal typescript expo template
- How to set up a React Native Redux project
- How to set up eslint for typescript and typescript react
- How to use Redux toolkit with typescript to prevent type errors
- Explored React Naviation
- Explored React Native Paper
- Typescript can be annoying sometimes

### What didn't work

- I had a hard time figuring out how to run the app on my phone. I kept getting expo problems, but I eventually just scrapped the original project and re-initialized the expo project and transfered my code which worked.

### Credits

- This base code for this project is the boilerplate code created when starting a new Expo Project. See this page (<https://reactnative.dev/docs/environment-setup>) for how to quickstart the expo project.
- <https://redux-toolkit.js.org/api/configureStore#full-example> and <https://redux-toolkit.js.org/tutorials/intermediate-tutorial> for setting up the redux framework using Redux Toolkit
- <https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos?file=/src/containers/VisibleTodoList.js> this is a todo list tutorial that I didn't follow but I referenced a little bit
- I did this project individually.
