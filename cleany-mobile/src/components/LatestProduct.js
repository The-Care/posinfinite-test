import {
  View,
  Text,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function LatestProduct({ navigation, products }) {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
  });
  const productImages = [
    require("../../assets/jeans.webp"),
    require("../../assets/flannel.webp"),
    require("../../assets/jacket.webp"),
    require("../../assets/kemeja.jpeg"),
    require("../../assets/t-shirt.webp"),
  ];

  const Item = ({ title, price, category, image, description }) => (
    <>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("DetailProduct", {
            price,
            title,
            category,
            image,
            description,
          })
        }
      >
        <View
          style={{
            height: 200,
            width: 180,
            marginRight: 20,
            borderRadius: 20,
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
                bottom: 60,
                left: 5,
                fontFamily: "Roboto_400Regular",
                fontSize: 15,
                letterSpacing: 1,
              }}
            >
              {category}
            </Text>
            <Text
              style={{
                color: "white",
                textAlignVertical: "bottom",
                position: "absolute",
                bottom: 30,
                left: 5,
                fontFamily: "Roboto_700Bold",
                fontSize: 28,
                letterSpacing: 1,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                color: "white",
                textAlignVertical: "bottom",
                position: "absolute",
                bottom: 10,
                left: 5,
                fontFamily: "Roboto_400Regular",
                fontSize: 20,
                letterSpacing: 1,
              }}
            >
              $ {price}/pc
            </Text>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3%",
          marginBottom: "10%",
        }}
      >
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Item
              title={item.productName}
              price={item.price}
              category={item.category}
              description={item.description}
              image={item.photo}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </>
  );
}
