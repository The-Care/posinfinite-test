import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import InvoiceDetail from "../components/InvoiceDetail";
import { Entypo } from "@expo/vector-icons";
import Balance from "../components/Balance";
import { AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function DetailProduct({ navigation, route, Item }) {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }

  const { title, category, price, image, description } = route.params;

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "#E7F5FD",
        }}
      >
        <SafeAreaView
          style={{
            height: 500,
          }}
        >
          <ImageBackground
            source={{
              uri: image,
            }}
            resizeMode="stretch"
            style={{
              height: "100%",
              width: "100%",
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              overflow: "hidden",
              position: "relative",
            }}
          />
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
                position: "absolute",
                top: 60,
              }}
              name="md-chevron-back"
              size={50}
              color="#2D9CDB"
            />
          </TouchableWithoutFeedback>
        </SafeAreaView>
        <View
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            flex: 1,
          }}
        >
          <View
            style={{
              height: 35,
              backgroundColor: "#CAECFF",
              width: 80,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto_400Regular",
                fontSize: 12,
                letterSpacing: 1,
                marginBottom: "auto",
                marginRight: "auto",
                marginTop: "auto",
                marginLeft: "auto",
                color: "#2D9CDB",
              }}
            >
              {category}
            </Text>
          </View>

          <Text
            style={{
              fontFamily: "Roboto_500Medium",
              fontSize: 40,
              letterSpacing: 1,
              marginTop: "5%",
              color: "#2D9CDB",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: "Roboto_500Medium",
              fontSize: 20,
              letterSpacing: 1,
              marginTop: "2%",
              color: "#2D9CDB",
            }}
          >
            $ {price}/pc
          </Text>
          <Text
            style={{
              fontFamily: "Roboto_400Regular",
              fontSize: 15,
              letterSpacing: 1,
              marginTop: "2%",
              color: "grey",
            }}
          >
            {description}
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginBottom: "10%",
              marginTop: "10%",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <AntDesign
              style={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
              name="minuscircle"
              size={30}
              color="grey"
            />
            <View
              style={{
                height: 50,
                borderWidth: 1,
                width: 100,
                borderRadius: 10,
                marginRight: "5%",
                marginLeft: "5%",
                borderColor: "#2D9CDB",
              }}
            >
              <Text
                style={{
                  marginBottom: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "auto",
                  fontSize: 30,
                  color: "grey",
                  fontFamily: "Roboto_400Regular",
                }}
              >
                0
              </Text>
            </View>
            <AntDesign
              style={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
              name="pluscircle"
              size={30}
              color="#2D9CDB"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
