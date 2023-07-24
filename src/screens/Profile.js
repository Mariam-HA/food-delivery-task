import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { removeToken } from "../api/auth/storage";
import UserContext from "../context/UserContext";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import LocationC from "../components/LocationC";

const Profile = () => {
  // console.log(Constants.systemFonts); // Get system fonts
  // console.log(Constants.deviceName); // Get device name
  // console.log(Constants.deviceId);

  const { setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser(false);
    removeToken();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {/* {user && <Text style={styles.username}>Username: {user.username}</Text>} */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <MaterialIcons name="logout" size={24} color="black" />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <View>
        <Text>App Version: {Constants.manifest.version}</Text>
      </View>
      <View>
        <LocationC />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e91e63",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    borderWidth: 1,
    margin: 17,
  },
  buttonText: {
    color: "black",
    marginRight: 10,
    fontWeight: "bold",
  },
});
