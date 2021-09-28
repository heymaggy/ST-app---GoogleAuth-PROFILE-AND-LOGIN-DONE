import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigator from "./TabNavigator"
import StoryScreen from "../screens/StoryScreen"

const Stack = createStackNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: true
    }}
    initialRouteName="Home"
    >
        <Stack.Screen name="Home" component={BottomNavigator}/>
        <Stack.Screen name = "StoryScreen" component={StoryScreen}/>
     </Stack.Navigator>
  )

};

export default StackNavigator
