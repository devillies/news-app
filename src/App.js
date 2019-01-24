import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainPage from "./MainPage";
import NewsPage from "./NewsPage";
const App = createStackNavigator({
  Home: MainPage,
  Page: NewsPage
});
const AppContainer = createAppContainer(App);
export default AppContainer;
