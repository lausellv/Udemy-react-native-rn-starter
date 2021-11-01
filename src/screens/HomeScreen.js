import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


// to condense the code we can refer directly to the navigation feature and remove props (=destructuring)
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
          
        }}
        title = "Go to my Components Demo"
      />
<Button
        onPress={() => {
          navigation.navigate("List");
          
        }}
        title = "Go to List Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Image");
          
        }}
        title = "Go to Image Screen"
      />
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
