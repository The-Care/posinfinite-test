import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cleany from "./src/screens/Cleany";
import Invoice from "./src/screens/Invoice";
import DetailProduct from "./src/screens/DetailProduct";
import CleanyAdmin from "./src/screens/CleanyAdmin";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Cleany" component={Cleany} />
          <Stack.Screen name="Invoice" component={Invoice} />
          <Stack.Screen name="DetailProduct" component={DetailProduct} />
          <Stack.Screen name="CleanyAdmin" component={CleanyAdmin} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
