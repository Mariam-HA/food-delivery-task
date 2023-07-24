import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CatCard = ({ item, onCategorySelect }) => {
  return (
    <TouchableOpacity onPress={() => onCategorySelect(item.name)}>
      <View style={styles.card}>
        <Text style={styles.text}>{item.name}</Text>
        <Image style={styles.image} source={item.image} />
      </View>
    </TouchableOpacity>
  );
};

export default CatCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    width: 120,
    height: 120,
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 1,
  },
});
