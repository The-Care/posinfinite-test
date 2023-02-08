import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function PreviousOrder({ navigation }) {
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
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Invoice");
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "white",
            height: 95,
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "3%",
            marginBottom: "10%",
            borderRadius: 6,
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
              flex: 4,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 2,
              }}
            >
              <Image
                style={{
                  width: "90%",
                  height: "80%",
                  marginLeft: "auto",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
                source={require("../../assets/laundryBag.png")}
              />
            </View>
            <View
              style={{
                flex: 4,
              }}
            >
              <View
                style={{
                  flex: 2.5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto_400Regular",
                    fontSize: 15,
                    letterSpacing: 1,
                    color: "black",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  Bag of Laundry
                </Text>
              </View>
              <View
                style={{
                  flex: 3.5,
                }}
              >
                <View
                  style={{
                    flex: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto_300Light",
                      fontSize: 12,
                      letterSpacing: 1,
                      color: "black",
                      marginLeft: "10%",
                      marginRight: "auto",
                      marginTop: "auto",
                      // marginBottom: "auto",
                    }}
                  >
                    Total Order
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto_700Bold",
                      fontSize: 15,
                      letterSpacing: 1,
                      color: "#2D9CDB",
                      marginLeft: "10%",
                      marginRight: "auto",
                      // marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    $ 180.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: "#2D9CDB",
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
            }}
          >
            <View
              style={{
                flex: 4,
              }}
            >
              <FontAwesome5
                style={{
                  // marginBottom: "auto",
                  marginLeft: "auto",
                  marginTop: "auto",
                  marginRight: "auto",
                }}
                name="file-invoice"
                size={50}
                color="white"
              />
            </View>
            <View
              style={{
                flex: 2,
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto_700Bold",
                  fontSize: 12,
                  letterSpacing: 1,
                  color: "white",
                  marginRight: "auto",
                  marginLeft: "auto",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                INVOICE
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
