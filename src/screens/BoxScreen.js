import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoParent}>
      <View style={styles.viewTwoStyle}></View></View>
      <View style={styles.viewThreeStyle}></View>
        {/* <Text style={styles.textOneStyle}>Box Screen Child 1</Text> */}

      {/* <Text style={styles.textTwoStyle}>Box Screen Child 2 </Text> */}
      {/* <Text style={styles.textThreeStyle}>Box Screen Child 3</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    // alignItems: "flex-start",  // "flex-end", "flex-start" , stretch (default)
    flexDirection: "row", // by default it's column
     justifyContent: "space-between",
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopColor: "red",
    borderBottomColor: "blue", 
    height: 200
  },
  viewOneStyle: {
  
    backgroundColor: "red",

    height: 50,
  width: 50
  },
  viewTwoStyle: {
    // borderWidth: 3,
    backgroundColor: "green",
    height: 50,
  width: 50,
  // marginTop: 50
  // alignSelf: "flex-end"
  // top: 50

 
    // ...StyleSheet.absoluteFillObject,
    // top: 0,
    // left:0, 
    // right:0, 
    // bottom:0
   
  },
  viewTwoParent: {
    height: 100, 
    justifyContent: "flex-end"
  },
  viewThreeStyle: {
    borderWidth: 3,
    backgroundColor: "purple",

    height: 50,
    width: 50
  
  }
});

export default BoxScreen;
