import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";

const LoginNavigator = createStackNavigator({
  Auth: LoginScreen
});

const MainNavigator = createSwitchNavigator({
  Startup: MainScreen,
  Auth: LoginNavigator
});

export default createAppContainer(MainNavigator);
