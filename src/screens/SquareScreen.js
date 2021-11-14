import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    //color === "red", "green", "blue"
    // change === +COLOR_INCREMENT, -COLOR_INCREMENT
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);  // one cannot return directly from a ternary statement
        // if (red + change > 255 || red + change < 0) {
        //   return;
        // } else {
        //   setRed(red + change);
        // }
        return;
      case "green":
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  console.log(red);
  console.log(green);
  console.log(blue);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", COLOR_INCREMENT * -1)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", COLOR_INCREMENT * -1)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{ height: 500, width: 500, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
