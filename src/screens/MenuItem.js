import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const MenuItem = ({ route }) => {
  const { menu } = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={menu.image} />
      <Text style={styles.name}>{menu.name}</Text>
      <Text style={styles.price}>Price: {menu.price}</Text>
      <Text style={styles.ingredients}>
        Ingredients: {menu.ingredients.join(",")}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Add to cart" onPress={() => {}} />
      </View>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 200,
    // resizeMode: "cover",
    // marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
  },
  ingredients: {
    fontSize: 18,
  },
  buttonContainer: {},
});

//.join(", ")
