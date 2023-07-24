import { Image, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerC = ({ onImagePicked }) => {
  const [image, setImage] = useState("");

  const getPremisstion = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("not granted");
    }
  };

  useEffect(() => {
    getPremisstion();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onImagePicked(result.assets[0].uri);
    }
  };
  return (
    <Pressable onPress={pickImage}>
      <View style={styles.image}>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </View>
    </Pressable>
  );
};

export default ImagePickerC;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    backgroundColor: "gray",
    borderRadius: "100%",
    margin: 17,
    overflow: "hidden",
  },
});
