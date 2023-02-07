import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { InvoiceContext } from "../InvoiceContext";

export function InvoiceIcon({ navigation }) {
  const { getItemsCount } = useContext(InvoiceContext);
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        Cart ({getItemsCount()})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "orange",
    height: 39,
    padding: 12,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
});
