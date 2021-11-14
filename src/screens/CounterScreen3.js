import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet } from "react-native";


const reducer = (state, action)=>{
  // state === {count: #}
  // action === {type: "change_increase" || "change_decrease", payload: -1 or 1}
  switch (action.type){
    case "change_increase":
      return {...state, count: state.count + action.payload};
      case "change_decrease":
        return {...state, count : state.count + action.payload};
        default: return state;
  }
}

const CounterScreen3 = () => {
 const [state, dispatch ] = useReducer ( reducer, {count: 0} )
  return (
    <View>
      <Button title="Increase" onPress={() => dispatch ({type:"change_increase", payload: +1})}></Button>

      <Button
        title="Decrease"
        onPress={() => dispatch({type:"change_decrease", payload: - 1
        })}
      ></Button>
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen3;
