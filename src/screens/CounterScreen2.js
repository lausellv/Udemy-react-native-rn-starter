import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const CounterScreen2 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)}></Button>

      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen2;
