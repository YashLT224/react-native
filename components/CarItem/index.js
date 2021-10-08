import React from "react";
import ModelX from "../../assets/images/ModelX.jpeg";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton/index";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car.item;
  console.warn(props.car.item.name);
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}> {name}</Text>
        <Text style={styles.subtitles}>
          {tagline} <Text style={styles.subtitlescta}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttoncontainer}>
        <StyledButton
          type="primary"
          content={"Custom order"}
          onPress={() => console.warn("Custom button was pressed")}
        ></StyledButton>
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => console.warn("Existing Inventory  was pressed")}
        ></StyledButton>
      </View>
    </View>
  );
};

export default CarItem;
