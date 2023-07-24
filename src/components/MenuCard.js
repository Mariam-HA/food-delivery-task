import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("item", {
          menu: item,
        });
      }}
    >
      <View style={styles.card}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.details}>
          <View style={styles.textAndPrice}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.price}>Price:{item.price}</Text>
            {/* <Text style={styles.ingredients}>Ingredients:{item.ingredients}</Text> */}
          </View>
          <Button title="Add" onPress={() => {}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 17,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,

    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "gray",
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    margin: 3,
  },
  details: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    // justifyContent: "space-between",
  },
  textAndPrice: {
    flexDirection: "column",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "gray",
  },
  ingredients: {
    fontSize: 18,
    color: "gray",
  },
});
