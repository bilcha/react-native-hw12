import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Button from "../components/Button";
import { colors } from "../styles/global";

export default function CreatePostsScreen() {
  const navigation = useNavigation();
  const handlePublish = () => {
    console.log("Published");
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground style={styles.postPhotoWrap}>
            <TouchableOpacity style={[styles.cameraBtn]}>
              <Ionicons name="camera" size={24} color={colors.darkGrey} />
            </TouchableOpacity>
          </ImageBackground>

          <Text style={styles.textWrap}>
            <Text style={styles.text}>Завантажте фото</Text>
          </Text>

          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              placeholder="Назва..."
              placeholderTextColor={colors.darkGrey}
              style={[styles.input]}
            />
            <View>
              <Feather
                name="map-pin"
                size={24}
                color={colors.darkGrey}
                style={styles.locationIcon}
              />
              <TextInput
                placeholder="Місцевість..."
                placeholderTextColor={colors.darkGrey}
                style={{ ...styles.input, marginBottom: 32, paddingLeft: 28 }}
              />
            </View>
          </KeyboardAvoidingView>
          <Button onPress={handlePublish}>
            <Text style={[styles.btnText, styles.mainText]}>Опублікувати</Text>
          </Button>
          <TouchableOpacity style={styles.trashBtn}>
            <Feather name="trash-2" size={24} color={colors.darkGrey} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 5,
    backgroundColor: colors.white,
    borderTopWidth: 0.5,
    borderBottomWidth: -0.5,
    borderTopColor: "rgba(0, 0, 0, 0.30)",
    borderBottomColor: "rgba(0, 0, 0, 0.30)",
  },
  postPhotoWrap: {
    marginTop: 32,
    flex: 1,
    height: 250,
    overflow: "hidden",
    backgroundColor: colors.inputBackground,
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  cameraBtn: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrap: {
    paddingTop: 8,
    marginBottom: 32,
  },
  text: {
    fontSize: 16,
    fontFamily: "RobotoRegular",
    color: colors.darkGrey,
  },
  input: {
    height: 50,
    width: "100%",
    marginBottom: 16,
    borderBottomWidth: 1,
    paddingBottom: 11,
    borderColor: colors.border,
    color: colors.darkText,
    fontSize: 16,
  },
  locationIcon: {
    position: "absolute",
    top: 10,
    left: 0,
  },
  btnText: {
    color: colors.darkGrey,
    textAlign: "center",
  },
  mainText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  trashBtn: {
    width: 70,
    borderRadius: 20,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 23,
    paddingVertical: 8,
    marginTop: 130,
    marginBottom: 45,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
