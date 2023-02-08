import { View, Text, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

export default function Balance() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#E7F5FD",
          height: 180,
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "10%",
          borderRadius: 20,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          elevation: Platform.OS === "android" ? 3 : null,
        }}
      >
        <View
          style={{
            flex: 2,
          }}
        ></View>
        <View
          style={{
            flex: 2,
          }}
        >
          <Text
            style={{
              marginLeft: "auto",
              marginRight: "8%",
              fontFamily: "Roboto_400Regular",
              fontSize: 18,
              letterSpacing: 1,
              color: "black",
              marginBottom: "2%",
            }}
          >
            Your Balance
          </Text>
          <Text
            style={{
              marginLeft: "auto",
              marginRight: "8%",
              fontFamily: "Roboto_700Bold",
              fontSize: 37,
              letterSpacing: 1,
              color: "#3B97CB",
            }}
          >
            $ 200.00
          </Text>
        </View>
      </View>
    </>
  );
}
