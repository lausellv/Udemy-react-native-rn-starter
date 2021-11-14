import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button onPress={() => navigation.navigate("Components")} title="Go to Components Demo" />
      <Button title="Go to List Demo" onPress={() => navigation.navigate("List")} />
      <Button title="Go to Image Demo" onPress={() => navigation.navigate("Image")} />

      <Button title="Go to Counter Demo" onPress={() => navigation.navigate("Counter")} />
      <Button title="Go to Counter 2 Demo" onPress={() => navigation.navigate("Counter2")}></Button>
      <Button title="Go to Color Demo" onPress={() => navigation.navigate("Color")} />
      <Button title="Go to Color Screen 2" onPress={()=>navigation.navigate("Color2")}/>
      <Button title="Go to Color Square Demo" onPress={()=>navigation.navigate("Square")}/>
      <Button title="Go to Color Square Demo 2" onPress={()=>navigation.navigate("Square2")}/>
   
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
