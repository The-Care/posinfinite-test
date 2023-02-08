import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PreviousOrder from "../components/PreviousOrder";
import MostOrdered from "../components/MostOrdered";
import LatestProduct from "../components/LatestProduct";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import Balance from "../components/Balance";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/actions";
import { useEffect } from "react";

export default function Cleany({ navigation }) {
  const dispatch = useDispatch();
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  const products = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "#E7F5FD",
        }}
      >
        <View
          style={{
            height: 250,
            backgroundColor: "#F36868",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            position: "relative",
          }}
        >
          <Text
            style={{
              marginTop: 80,
              marginLeft: 35,
              fontFamily: "Roboto_500Medium",
              color: "white",
              fontSize: 20,
            }}
          >
            Welcome, John
          </Text>
        </View>

        <View
          style={{
            paddingLeft: "5%",
            paddingRight: "5%",
            position: "absolute",
            top: 130,
            right: 20,
            left: 20,
          }}
        >
          <Balance />
        </View>

        <View
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            marginTop: "20%",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto_700Bold",
              fontSize: 16,
              letterSpacing: 1,
              color: "#3B97CB",
            }}
          >
            PREVIOUS ORDER
          </Text>
          <PreviousOrder navigation={navigation} />
          <Text
            style={{
              fontFamily: "Roboto_700Bold",
              fontSize: 16,
              letterSpacing: 1,
              color: "#3B97CB",
            }}
          >
            YOUR MOST ORDERED
          </Text>
          <MostOrdered />
        </View>
        <View
          style={{
            paddingLeft: "10%",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto_700Bold",
              fontSize: 16,
              letterSpacing: 1,
              color: "#3B97CB",
              paddingRight: "0%",
            }}
          >
            OUR LATEST PRODUCT
          </Text>
          <LatestProduct navigation={navigation} products={products} />
        </View>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("CleanyAdmin")}
        >
          <View
            style={{
              height: 35,
              backgroundColor: "#CAECFF",
              width: 140,
              borderRadius: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "15%",
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
              Switch to Admin
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
}
