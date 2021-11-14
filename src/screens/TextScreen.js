import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput 
      autoCapitalize="none"
       autoCorrect={false} 
       value={name} 
       style={styles.input}
       onChangeText={(newValue)=>setName(newValue)}/>
       <Text>My name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
