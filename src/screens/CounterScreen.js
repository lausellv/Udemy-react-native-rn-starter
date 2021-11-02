import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// this is a functional component
const CounterScreen = () => {
// function based state inside a functional component
const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="decrease"
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title="increase"
        onPress={() => {
          setCounter(counter -1);
        }}
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
