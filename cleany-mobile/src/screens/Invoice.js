import { View, Text, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import InvoiceDetail from "../components/InvoiceDetail";
import { Entypo } from "@expo/vector-icons";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function Invoice({ navigation }) {
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#E7F5FD",
      }}
    >
      <TouchableWithoutFeedback
        style={{ flex: 0.5, marginLeft: "7%", marginRight: "7%" }}
        onPress={() => {
          navigation.navigate("Cleany");
        }}
      >
        <Ionicons
          style={{
            marginBottom: "auto",
            marginTop: "auto",
            paddingLeft: "3%",
          }}
          name="md-chevron-back"
          size={50}
          color="#2D9CDB"
        />
      </TouchableWithoutFeedback>
      <View style={{ flex: 4, marginLeft: "7%", marginRight: "7%" }}>
        <InvoiceDetail />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginLeft: "7%",
          marginRight: "7%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "60%",
            backgroundColor: "#56E4A0",
            marginTop: "auto",
            marginBottom: "auto",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto_700Bold",
              fontSize: 20,
              letterSpacing: 2,
              marginBottom: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginLeft: "auto",
              color: "white",
            }}
          >
            <Entypo name="chat" size={20} color="white" /> WHATSAPP US
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.5 }} />
    </SafeAreaView>
  );
}
