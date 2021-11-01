import React from "react";
import { Image, View, Text, StyleSheet, ViewPropTypes } from "react-native";

const ImageDetail = ({title, score, imgSource}) => {
 console.log(imgSource)
  return (
    <View>
      <Image source={imgSource}/>
      <Text>{title}</Text>
      <Text>Score- {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
