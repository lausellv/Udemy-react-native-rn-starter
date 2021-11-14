import React, { useReducer } from "react"; // this is a hook function similar to useState
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// by convention we define the reducer function outside the component.
const reducer = (state, action) => {
  // state === {red: #, green:#, blue:#}
  // action === action.type: "change_red" or "change_green" or "change_blue" , action.payload -15 or 15
  switch (action.type) {
    case "change_red":
      // if (state.red + action.amount > 255 || state.red + action.amount < 0){
      //   return state;
      // }
      // return {...state, red: state.red + action.amount}
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    // take the current value and add the amount.
    case "change_green":
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state; // default case we are always going to return the state object
  }
};

// a good name for dispatch would be run my reducer
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 }); // initial value of zero
  const { red, green, blue } = state;

  console.log(red);
  console.log(green);
  console.log(blue);

  return (
    <View>
      <ColorCounter
        // we pass an object with an action to dispatch (describing how we want to modify state
        // onIncrease = {()=> dispatch ({onChange:"red", amount: COLOR_INCREMENT })}  /refactored 
        onIncrease={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_green", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })}
        color="Blue"
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            height: 500,
            width: 500,

            // red green and blue are nested inside the state object
            backgroundColor: `rgb(${state.red}, ${green}, ${blue})`
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
