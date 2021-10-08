import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem/index";
import "./styles";

import cars from "./cars";
import styles from "./styles";
const CarList = (props) => {
  console.warn(cars);
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={(item) => (
          <CarItem
            car={item}
            showsVerticalScrollIndicator={false}
            snapToAlignment={"start"}
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get("window").height}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default CarList;
