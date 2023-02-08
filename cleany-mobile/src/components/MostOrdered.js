import { View, Text, ScrollView, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function MostOrdered() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          height: 200,
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3%",
          marginBottom: "10%",
          borderRadius: 10,
        }}
      >
        <ImageBackground
          source={require("../../assets/laundry-room.webp")}
          resizeMode="stretch"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 10,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlignVertical: "bottom",
              position: "absolute",
              bottom: 30,
              left: 5,
              fontFamily: "Roboto_700Bold",
              fontSize: 20,
              letterSpacing: 1,
            }}
          >
            Dry Cleaning
          </Text>
          <Text
            style={{
              color: "white",
              textAlignVertical: "bottom",
              position: "absolute",
              bottom: 10,
              left: 5,
              fontFamily: "Roboto_400Regular",
              fontSize: 15,
              letterSpacing: 1,
            }}
          >
            12x | total of $ 4.000
          </Text>
        </ImageBackground>
      </View>
    </>
  );
}
