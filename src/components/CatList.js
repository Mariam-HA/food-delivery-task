import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import CatCard from "./CatCard";

const categories = [
  { id: "1", name: "Pizza", image: require("../../assets/Pizza.jpg") },
  { id: "2", name: "Burger", image: require("../../assets/Burger.jpg") },
  { id: "3", name: "Sushi", image: require("../../assets/Sushi.jpg") },
  { id: "4", name: "Pasta", image: require("../../assets/Pasta.jpg") },
  {
    id: "5",
    name: "Sandwiches",
    image: require("../../assets/Sandwiches.jpg"),
  },
  {
    id: "6",
    name: "Noodles",
    image: require("../../assets/Noodles.jpg"),
  },
];
const CatList = ({ onCategorySelect }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CatCard item={item} onCategorySelect={onCategorySelect} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CatList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    height: 168,
  },
});
