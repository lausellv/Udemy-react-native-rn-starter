import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import CounterScreen2 from "./src/screens/CounterScreen2";
import ColorScreen2 from "./src/screens/ColorScreen2";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreen2 from "./src/screens/SquareScreen2";
import CounterScreen3 from "./src/screens/CounterScreen3";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Counter2: CounterScreen2,
    Color: ColorScreen,
    Color2: ColorScreen2,
    Square: SquareScreen,
    Square2: SquareScreen2,
    Counter3: CounterScreen3,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
