import { StyleSheet, TextInput, View, ViewProps } from "react-native";
import { colors } from "../styles/global";
import { FC, ReactNode, useState } from "react";

type InputProps = {
  value: string;
  placeholder?: string;
  outerStyles?: ViewProps["style"];
  rightButton?: ReactNode;
  autoFocus?: Boolean;
  onValueChange: (value: string) => void;
  secureTextEntry?: boolean;
};

const Input: FC<InputProps> = ({
  value,
  placeholder,
  outerStyles,
  rightButton,
  autoFocus = false,
  onValueChange,
  secureTextEntry = false,
}) => {
  return (
    <View style={[styles.input, outerStyles]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChangeText={onValueChange}
        secureTextEntry={secureTextEntry}
      />
      {rightButton}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.inputBackground,
    padding: 16,
  },
});

export default Input;
