import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchInput from "../components/common/SearchInput";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View>
        <LinearGradient
          colors={["#0EBE7E", "#07D9AD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.header, { paddingTop: insets.top }]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "#FAFAFA",
                  fontFamily: "Rubik-Light",
                }}
              >
                Hi Handwerker!{" "}
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  marginTop: 6,
                  color: "#fff",
                  fontFamily: "Rubik-Bold",
                }}
              >
                Find Your Doctor
              </Text>
            </View>
            <Image
              style={{ height: 60, width: 60 }}
              source={require("../assets/images/homeHeader.png")}
            />
          </View>
        </LinearGradient>
        <View style={{ marginHorizontal: 20 }}>
          <SearchInput />
        </View>
        <View style={styles.content}>
          
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 176,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 20,
  },

  gradient: {
    flex: 1,
    borderRadius: 121,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#ffffff",
    paddingTop:50,
    height: "100%",
    zIndex: -1,
    position:"relative"
   
  },
});
