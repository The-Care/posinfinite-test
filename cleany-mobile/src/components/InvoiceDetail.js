import { View, Text, ScrollView, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function InvoiceDetail() {
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
          height: 200,
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5%",
          borderRadius: 10,
          marginBottom: "5%",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#2D9CDB",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto_700Bold",
              fontSize: 30,
              //   letterSpacing: 1,
              color: "white",
              marginBottom: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginLeft: "auto",
            }}
          >
            ORDER SUMMARY
          </Text>
        </View>
        <View style={{ flex: 4.2, backgroundColor: "white" }}>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                textAlign: "right",
                marginTop: "auto",
                marginBottom: "auto",
                color: "#2D9CDB",
                paddingRight: "5%",
                fontFamily: "Roboto_500Medium",
              }}
            >
              ORDER #21340
            </Text>
          </View>
          <View
            style={{
              flex: 1.5,
            }}
          >
            <Text
              style={{
                textAlign: "left",
                color: "black",
                paddingLeft: "5%",
                marginBottom: "5%",
                fontFamily: "Roboto_700Bold",
              }}
            >
              JOHN DOE
            </Text>
            <Text
              style={{
                textAlign: "left",
                color: "black",
                paddingLeft: "5%",
                fontFamily: "Roboto_300Light",
              }}
            >
              123 Pasir Ris,
            </Text>
            <Text
              style={{
                textAlign: "left",
                color: "black",
                paddingLeft: "5%",
                fontFamily: "Roboto_300Light",
              }}
            >
              13810, Singapore
            </Text>
          </View>
          <View
            style={{
              flex: 3.5,
            }}
          >
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                borderBottomWidth: 1,
                borderColor: "#2D9CDB",
              }}
            >
              <View
                style={{
                  flex: 1,
                }}
              >
                <Image
                  style={{
                    width: "70%",
                    height: "70%",
                    marginLeft: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  source={require("../../assets/laundryBag.png")}
                />
              </View>
              <View
                style={{
                  flex: 2.5,
                }}
              >
                <View
                  style={{
                    flex: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto_500Medium",
                      fontSize: 15,
                      letterSpacing: 1,
                      color: "black",
                      marginTop: "auto",
                      //   marginBottom: "auto",
                      paddingLeft: "5%",
                    }}
                  >
                    Bag of Laundry
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto_400Regular",
                      fontSize: 13,
                      color: "#2D9CDB",
                      //   marginTop: "auto",
                      marginBottom: "auto",
                      paddingLeft: "5%",
                    }}
                  >
                    Qty: 2
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1.5,
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
                      fontSize: 13,
                      color: "black",
                      marginTop: "auto",
                      marginLeft: "auto",
                      marginRight: "auto",
                      //   marginBottom: "auto",
                    }}
                  >
                    Total
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
                      color: "#2D9CDB",
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    $ 180.00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                borderBottomWidth: 1,
                borderColor: "#2D9CDB",
              }}
            >
              <View
                style={{
                  flex: 1,
                }}
              >
                <Image
                  style={{
                    width: "70%",
                    height: "70%",
                    marginLeft: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  source={require("../../assets/laundryBag.png")}
                />
              </View>
              <View
                style={{
                  flex: 2.5,
                }}
              >
                <View
                  style={{
                    flex: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto_500Medium",
                      fontSize: 15,
                      letterSpacing: 1,
                      color: "black",
                      marginTop: "auto",
                      //   marginBottom: "auto",
                      paddingLeft: "5%",
                    }}
                  >
                    Dry Cleaning
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto_400Regular",
                      fontSize: 13,
                      color: "#2D9CDB",
                      //   marginTop: "auto",
                      marginBottom: "auto",
                      paddingLeft: "5%",
                    }}
                  >
                    Qty: 3
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1.5,
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
                      fontSize: 13,
                      color: "black",
                      marginTop: "auto",
                      marginLeft: "auto",
                      marginRight: "auto",
                      //   marginBottom: "auto",
                    }}
                  >
                    Total
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
                      color: "#2D9CDB",
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    $ 10.00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                borderBottomWidth: 1,
                borderColor: "#2D9CDB",
              }}
            >
              <View
                style={{
                  flex: 1,
                }}
              >
                <Image
                  style={{
                    width: "70%",
                    height: "70%",
                    marginLeft: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  source={require("../../assets/laundryBag.png")}
                />
              </View>
              <View
                style={{
                  flex: 2.5,
                }}
              >
                <View
                  style={{
                    flex: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto_500Medium",
                      fontSize: 15,
                      letterSpacing: 1,
                      color: "black",
                      marginTop: "auto",
                      //   marginBottom: "auto",
                      paddingLeft: "5%",
                    }}
                  >
                    Rug
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto_400Regular",
                      fontSize: 13,
                      color: "#2D9CDB",
                      //   marginTop: "auto",
                      marginBottom: "auto",
                      paddingLeft: "5%",
                    }}
                  >
                    Qty: 1
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1.5,
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
                      fontSize: 13,
                      color: "black",
                      marginTop: "auto",
                      marginLeft: "auto",
                      marginRight: "auto",
                      //   marginBottom: "auto",
                    }}
                  >
                    Total
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
                      color: "#2D9CDB",
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    $ 14.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.8,
            backgroundColor: "#2D9CDB",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingLeft: "5%",
            paddingRight: "5%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 3,
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto_700Bold",
                color: "white",
                fontSize: 20,
                letterSpacing: 1,
              }}
            >
              TOTAL ORDER
            </Text>
          </View>
          <View
            style={{
              flex: 3,
            }}
          >
            <Text
              style={{
                textAlign: "right",
                marginTop: "auto",
                marginBottom: "auto",
                fontFamily: "Roboto_700Bold",
                color: "white",
                fontSize: 20,
              }}
            >
              $ 204.00
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
