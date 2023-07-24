import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurant from "../screens/Restaurant";
import MenuItem from "../screens/MenuItem";
import BottomTabNavigation from "./BottomTabNavigation";
import MaterialDesign from "./MaterialDesign";
import LottiAnimations from "../screens/LottiAnimations";

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    // initialRouteName="home"
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      {/* <Stack.Screen name="animation" component={LottiAnimations} /> */}
      <Stack.Screen name="home" component={MaterialDesign} />
      <Stack.Screen name="restaurant" component={Restaurant} />
      <Stack.Screen name="item" component={MenuItem} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
