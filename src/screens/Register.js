import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { saveToken } from "../api/auth/storage";
import { TouchableOpacity } from "react-native";
import ImagePickerC from "../components/ImagePickerC";
import UserContext from "../context/UserContext";

const Register = () => {
  const [image, setImage] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const { setUser } = useContext(UserContext);
  //   console.log(userInfo);

  const { mutate: registerFun, isLoading } = useMutation({
    mutationFn: () => register({ ...userInfo, image }),
    onSuccess: (data) => {
      console.log(data);
      saveToken(data.token);
      setUser(true);
    },
  });

  return (
    <>
      <View style={styles.container}>
        <ImagePickerC onImagePicked={setImage} />
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
        title="Register"
        onPress={() => {
          registerFun();
        }}
      /> */}
        <TouchableOpacity
          style={styles.RegisterButton}
          onPress={() => {
            registerFun();
          }}
        >
          <Text style={styles.RegisterButtonText}>Register</Text>
        </TouchableOpacity>
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

export default Register;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 500,
    justifyContent: "center",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "gray",
    borderRadius: "100%",
    margin: 17,
    overflow: "hidden",
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
  RegisterButton: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  RegisterButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});
