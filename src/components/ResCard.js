import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ResCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("restaurant", {
          menu: item.menu,
          name: item.name,
          rating: item.rating,
          deliveryTime: item.deliveryTime,
        });
      }}
    >
      <View style={styles.card}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.details}>
          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>
              <MaterialIcons name="star-rate" size={22} color="#e91e63" />
              {item.rating}
            </Text>
            <Text style={styles.deliveryTime}>
              <AntDesign name="clockcircleo" size={22} color="#e91e63" />
              {item.deliveryTime}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 17,
    width: 400,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "gray",
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 12,
  },
  details: {
    padding: 10,
    alignItems: "flex-start",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  rating: {
    fontSize: 18,
    color: "gray",
  },
  deliveryTime: {
    fontSize: 18,
    color: "gray",
  },
});
