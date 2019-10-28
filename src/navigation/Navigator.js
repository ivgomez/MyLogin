import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import StartupScreen from "../screens/StartupScreen";

const LoginNavigator = createStackNavigator({
  Auth: LoginScreen
});

const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Main: MainScreen,
  Auth: LoginNavigator
});

export default createAppContainer(MainNavigator);
