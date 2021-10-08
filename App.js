import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import ModelX from "./assets/images/ModelX.jpeg";

import CarItem from "./components/CarItem/index";
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model X"}
        tagline={"starting from $69,000"}
        taglineCTA={"Touchless delivery"}
        image={ModelX}
      />
      <StatusBar style="auto " />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
