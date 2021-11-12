import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";

const ColorScreen2 = () => {
   const [colors, setColors] = useState([])
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()])
          console.log(colors);
        }}
      />
     
      <FlatList 
       keyExtractor={(color)=> color}
     
      data={colors} renderItem={(element) => {
        console.log(element)
      return  <View style={{ height: 100, width: 1600, backgroundColor: element.item }}/>
    }}
    />
</View>

  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen2;
