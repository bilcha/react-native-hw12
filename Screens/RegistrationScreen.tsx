import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { colors } from "../styles/global";
import InputField from "../components/InputField";
import Button from "../components/Button";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);

  const handleNameChange = (value: string) => {
    setName(value);
  };
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };
  const showPassword = () => {
    setIsSecure((prev) => !prev);
  };
  const handleRegistration = () => {
    console.log(
      `RegistrationData: name: ${name}, email: ${email}, password: ${password}`
    );
  };
  const passwordShow = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={styles.inputBtn}>Показати</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/photoBG.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <KeyboardAvoidingView
        style={styles.formWrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.photoContainer}></View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.inputContainer}>
              <InputField
                placeholder="Логін"
                value={name}
                onValueChange={handleNameChange}
              />
              <InputField
                placeholder="Адреса електронної пошти"
                value={email}
                onValueChange={handleEmailChange}
              />
              <InputField
                placeholder="Пароль"
                outerStyles={styles.passwordBtn}
                rightButton={passwordShow}
                value={password}
                onValueChange={handlePasswordChange}
                secureTextEntry={isSecure}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button text="Зареєстуватися" onPress={handleRegistration} />
              <Text style={styles.toLoginBtn}>Вже є акаунт? Увійти</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
  },
  formWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inner: {
    paddingHorizontal: 16,
    paddingBottom: 80,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  photoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: colors.inputBackground,
    borderRadius: 16,
  },
  title: {
    color: colors.darkText,
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 32,
  },
  inputContainer: {
    gap: 16,
  },
  buttonContainer: {
    gap: 16,
    marginTop: 42,
  },
  passwordBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBtn: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.blueText,
  },
  toLoginBtn: {
    color: colors.blueText,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
});
