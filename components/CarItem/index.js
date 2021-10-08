import React from "react";
import ModelX from "../../assets/images/ModelX.jpeg";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton/index";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={ModelX} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}> Model S</Text>
        <Text style={styles.subtitles}> Starting at $69,000</Text>
      </View>
      <StyledButton type="primary"></StyledButton>
      <StyledButton type="secondary"></StyledButton>
    </View>
  );
};

export default CarItem;
