import React from "react";
import { view, Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail score={5} title="Ocean" imgSource={require("../../assets/beach.jpg")}/>
      <ImageDetail score={4} title="Prairie" imgSource={require("../../assets/prairie.jpg")}/>
      <ImageDetail score={6} title="Mountain" imgSource={require("../../assets/mountain.jpg")}/>
      <ImageDetail score={9} title="Forest" imgSource={require("../../assets/forest.jpg")}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
