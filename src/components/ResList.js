import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import React, { useState } from "react";
import CatList from "./CatList";
import ResCard from "./ResCard";
import {
  TapGestureHandler,
  RotationGestureHandler,
} from "react-native-gesture-handler";

const restaurants = [
  {
    id: "1",
    name: "Mariam Pizza",
    category: "Pizza",
    rating: 5,
    deliveryTime: "30-45 min",
    image: require("../../assets/Pizza.jpg"),
    menu: [
      {
        image: require("../../assets/Pizza.jpg"),
        name: "Margherita",
        price: "11KD",
        ingredients: ["tomato", "mozzarella", "basil"],
      },
      {
        image: require("../../assets/Pizza.jpg"),
        name: "Pepperoni",
        price: "13KD",
        ingredients: ["tomato", "mozzarella", "pepperoni"],
      },
      {
        image: require("../../assets/Pizza.jpg"),
        name: "Vegetarian",
        price: "12KD",
        ingredients: [
          "tomato",
          "mozzarella",
          "bell peppers",
          "mushrooms",
          "olives",
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Best Burger",
    category: "Burger",
    rating: 4.5,
    deliveryTime: "30-45 min",
    image: require("../../assets/Burger.jpg"),
    menu: [
      {
        image: require("../../assets/Burger.jpg"),
        name: "Classic Burger",
        price: "10KD",
        ingredients: [
          "beef patty",
          "lettuce",
          "tomato",
          "onion",
          "cheese",
          "pickles",
        ],
      },
      {
        image: require("../../assets/Burger.jpg"),
        name: "Chicken Burger",
        price: "9KD",
        ingredients: ["chicken patty", "lettuce", "tomato", "onion", "mayo"],
      },
      {
        image: require("../../assets/Burger.jpg"),
        name: "Vegan Burger",
        price: "11KD",
        ingredients: [
          "vegan patty",
          "lettuce",
          "tomato",
          "onion",
          "vegan mayo",
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Sushi Station",
    category: "Sushi",
    rating: 4.7,
    deliveryTime: "20-30 min",
    image: require("../../assets/Sushi.jpg"),
    menu: [
      {
        image: require("../../assets/Sushi.jpg"),
        name: "Maki Rolls",
        price: "15KD",
        ingredients: ["rice", "nori", "fish", "vegetables"],
      },
      {
        image: require("../../assets/Sushi.jpg"),
        name: "Nigiri",
        price: "16KD",
        ingredients: ["rice", "fish"],
      },
      {
        image: require("../../assets/Sushi.jpg"),
        name: "Temaki",
        price: "14KD",
        ingredients: ["rice", "nori", "fish", "vegetables"],
      },
    ],
  },
];

const ResList = () => {
  const [selectedCat, setSelectedCat] = useState("");

  const handleSelectCat = (catId) => {
    setSelectedCat(catId);
  };

  const filteredRes = selectedCat
    ? restaurants.filter((restaurant) =>
        restaurant.category.includes(selectedCat)
      )
    : restaurants;
  return (
    <>
      <CatList onCategorySelect={handleSelectCat} />
      <TapGestureHandler>
        <RotationGestureHandler>
          <SafeAreaView style={styles.container}>
            {selectedCat && (
              <Text
                onPress={() => {
                  setSelectedCat("");
                }}
              >
                Filter: {selectedCat} X
              </Text>
            )}
            <Text style={styles.res}>Restaurants</Text>
            <FlatList
              data={filteredRes}
              renderItem={({ item }) => <ResCard item={item} />}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </RotationGestureHandler>
      </TapGestureHandler>
    </>
  );
};

export default ResList;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  res: {
    fontSize: 22,
    fontWeight: "bold",
    alignItems: "flex-start",
    marginLeft: 19,
  },
});
