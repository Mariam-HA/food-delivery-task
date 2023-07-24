import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuCard from "../components/MenuCard";

const Restaurant = ({ route }) => {
  const { menu, name, rating, deliveryTime } = route.params;

  return (
    <SafeAreaView>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.info}>
        <Text style={styles.rating}>Rating:{rating}</Text>
        <Text style={styles.deliveryTime}>Time:{deliveryTime}</Text>
      </View>

      <FlatList
        data={menu}
        renderItem={({ item }) => <MenuCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginVertical: 10,
    alignSelf: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginVertical: 10,
  },
  rating: {
    fontSize: 16,
    fontWeight: "600",
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: "600",
  },
});
