import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PreviousOrder from "../components/PreviousOrder";
import MostOrdered from "../components/MostOrdered";
import LatestProduct from "../components/LatestProduct";
import { Formik } from "formik";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import Balance from "../components/Balance";
import { useDispatch } from "react-redux";
import { addProduct, fetchAllProducts } from "../store/actions";

export default function CleanyAdmin({ navigation }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Wash and Fold", value: "washAndFold" },
    { label: "Dry Clean", value: "dryClean" },
    { label: "Home", value: "home" },
    { label: "Others", value: "others" },
  ]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Formik
          initialValues={{
            productName: "",
            description: "",
            sku: "",
            stock: "",
            category: "",
            price: "",
          }}
          onSubmit={(values) => {
            console.log("terpencet");
            dispatch(addProduct(values, value))
              .then((resp) => {
                navigation.navigate("Cleany");
                dispatch(fetchAllProducts());
              })
              .catch((err) => console.log(err));
          }}
          style={{}}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <ScrollView
              style={{
                backgroundColor: "#E7F5FD",
              }}
            >
              <SafeAreaView>
                {/* Header & Logo */}
                <View
                  style={{
                    flex: 1,
                    height: 80,
                    backgroundColor: "white",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      marginTop: "auto",
                      marginBottom: "auto",
                      borderRadius: 50 / 2,
                      marginLeft: "5%",
                    }}
                    source={require("../../assets/cleany-logo.png")}
                  />

                  <Text
                    style={{
                      fontFamily: "Roboto_500Medium",
                      color: "#0099EE",
                      fontSize: 20,
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "5%",
                    }}
                  >
                    Cleany Wash
                  </Text>
                </View>

                <Text
                  style={{
                    fontFamily: "Roboto_700Bold",
                    letterSpacing: 1,
                    fontSize: 40,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "5%",
                    marginBottom: "5%",
                  }}
                >
                  Add New Product
                </Text>

                {/* Form add product */}
                <View>
                  <Text
                    style={{
                      padding: 10,
                      color: "#0099EE",
                    }}
                  >
                    Product Name
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      marginLeft: "3%",
                      marginRight: "3%",
                      borderWidth: 1,
                      padding: 10,
                      backgroundColor: "white",
                      marginBottom: 20,
                      borderColor: "#0099EE",
                      borderRadius: 10,
                    }}
                    onChangeText={handleChange("productName")}
                    onBlur={handleBlur("productName")}
                    value={values.productName}
                  />

                  <Text
                    style={{
                      padding: 10,
                      color: "#0099EE",
                    }}
                  >
                    Description
                  </Text>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    style={{
                      height: 100,
                      marginLeft: "3%",
                      marginRight: "3%",
                      borderWidth: 1,
                      padding: 10,
                      backgroundColor: "white",
                      marginBottom: 20,
                      borderColor: "#0099EE",
                      borderRadius: 10,
                    }}
                    onChangeText={handleChange("description")}
                    onBlur={handleBlur("description")}
                    value={values.description}
                  />

                  <Text
                    style={{
                      padding: 10,
                      color: "#0099EE",
                    }}
                  >
                    SKU
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      marginLeft: "3%",
                      marginRight: "3%",
                      borderWidth: 1,
                      padding: 10,
                      backgroundColor: "white",
                      marginBottom: 20,
                      borderColor: "#0099EE",
                      borderRadius: 10,
                    }}
                    onChangeText={handleChange("sku")}
                    onBlur={handleBlur("sku")}
                    value={values.sku}
                  />

                  <Text
                    style={{
                      padding: 10,
                      color: "#0099EE",
                    }}
                  >
                    Stock
                  </Text>
                  <TextInput
                    keyboardType="numeric"
                    style={{
                      height: 50,
                      marginLeft: "3%",
                      marginRight: "3%",
                      borderWidth: 1,
                      padding: 10,
                      backgroundColor: "white",
                      marginBottom: 20,
                      borderColor: "#0099EE",
                      borderRadius: 10,
                    }}
                    onChangeText={handleChange("stock")}
                    onBlur={handleBlur("stock")}
                    value={values.stock}
                  />

                  <Text
                    style={{
                      padding: 10,
                      color: "#0099EE",
                    }}
                  >
                    Category
                  </Text>
                  <DropDownPicker
                    style={{
                      height: 50,
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderWidth: 1,
                      width: "94%",
                      padding: 10,
                      backgroundColor: "white",
                      marginBottom: 20,
                      borderColor: "#0099EE",
                      borderRadius: 10,
                    }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select category"
                  />

                  <Text
                    style={{
                      padding: 10,
                      color: "#0099EE",
                    }}
                  >
                    Price
                  </Text>
                  <TextInput
                    keyboardType="numeric"
                    style={{
                      height: 50,
                      marginLeft: "3%",
                      marginRight: "3%",
                      borderWidth: 1,
                      padding: 10,
                      backgroundColor: "white",
                      marginBottom: 20,
                      borderColor: "#0099EE",
                      borderRadius: 10,
                    }}
                    onChangeText={handleChange("price")}
                    onBlur={handleBlur("price")}
                    value={values.price}
                  />
                  <Button onPress={handleSubmit} title="Submit" />
                  {/* {image && (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 200, height: 200 }}
                    />
                  )} */}
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("Cleany")}
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
                        Back to User View
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </SafeAreaView>
            </ScrollView>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </>
  );
}
