import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CreateStoryScreen from "../screens/CreateStory";
import DisplayScreen from "../screens/FeedStory";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
    labeled={false}
    barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "DisplayStories") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "CreateStory") {
            iconName = focused ? "create" : "create-outline";
          }
          return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.iconStyle} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "maroon",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="DisplayStories" component={DisplayScreen} />
      <Tab.Screen name="CreateStory" component={CreateStoryScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator


const styles = StyleSheet.create({
  bottomTabStyle:{
    height: "6%",
    backgroundColor: "#2f345d",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
     overflow: "hidden",
    position: "absolute"

  },
  iconStyle:{
    width: RFValue(30),
    height: RFValue(30)
  }
})
