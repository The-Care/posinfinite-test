import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductList } from "./screens/ProductList";
import { ProductDetail } from "./screens/ProductDetail";
import { InvoiceProvider } from "./InvoiceContext";
import { InvoiceIcon } from "./components/InvoiceIcon";
import { Invoice } from "./screens/Invoice";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <InvoiceProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={ProductList}
            options={({ navigation }) => ({
              title: "Products",
              headerRight: () => <InvoiceIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={({ navigation }) => ({
              title: "Products",
              headerRight: () => <InvoiceIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Invoice"
            component={Invoice}
            options={({ navigation }) => ({
              title: "Products",
              headerRight: () => <InvoiceIcon navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </InvoiceProvider>
  );
}

const styles = StyleSheet.create({
  Container: {
    textAlign: "center",
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
