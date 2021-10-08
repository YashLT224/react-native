import React from "react";
import ModelX from "../../assets/images/ModelX.jpeg";
import { View, Text, ImageBackground } from "react-native";

import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={ModelX} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}> Model S</Text>
        <Text style={styles.subtitles}> Starting at $69,000</Text>
      </View>
    </View>
  );
};

export default CarItem;
