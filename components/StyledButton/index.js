import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "../StyledButton/styles";

const StyledButton = (props) => {
  const type = props.type;
  console.warn(type);
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFFA6" : "#171A20CC";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          alert("hey there");
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{type}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
