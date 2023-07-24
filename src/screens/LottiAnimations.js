import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";

const LottiAnimations = () => {
  return (
    <Lottie
      source={require("../../assets/animation_lkeo4lew.json")}
      autoPlay
      loop
    />
  );
};

export default LottiAnimations;

const styles = StyleSheet.create({});
