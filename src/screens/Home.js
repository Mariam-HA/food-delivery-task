import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CatList from "../components/CatList";
import ResList from "../components/ResList";
import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

const Home = () => {
  return (
    // <View style={{ paddingTop: Constants.statusBarHeight }}>
    //to avoid overlap
    <SafeAreaView style={styles.container}>
      <ResList />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
