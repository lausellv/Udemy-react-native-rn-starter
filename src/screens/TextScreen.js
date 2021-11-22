import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password: </Text>
      <TextInput 
      autoCapitalize="none"
       autoCorrect={false} 
       value={password}
       style={styles.input}
        onChangeText={(newPassword) =>setPassword(newPassword)}
        
      />
        { password.length < 4 ? <Text>Password must be at least 5 characters.</Text> : null 
        }
     
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
