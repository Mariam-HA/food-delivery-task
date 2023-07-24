import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import ROUTES from "../navigation";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { saveToken } from "../api/auth/storage";
import UserContext from "../context/UserContext";
import { TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const { setUser } = useContext(UserContext);

  const {
    mutate: loginFunction,
    error,
    isLoading,
  } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: (data) => {
      saveToken(data.token);
      setUser(true);
    },
  });
  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="username"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, username: value });
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, password: value });
          }}
          style={styles.input}
        />
        {/* <Button
          title="Login"
          onPress={() => {
            loginFunction();
            color = "blue";
          }}
        /> */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            loginFunction();
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Not a user? Register"
          onPress={() => {
            navigation.navigate(ROUTES.AUTHROUTES.REGISTER);
          }}
          color="gray"
        />
      </View>
      {isLoading && (
        <View
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: "#00000090",
            zIndex: 1,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Loading...</Text>
        </View>
      )}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 500,
    justifyContent: "center",
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: "80%",
    margin: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  loginButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});
