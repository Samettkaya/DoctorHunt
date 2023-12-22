import { View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
type Props = {};

const SearchInput = (props: Props) => {
  const [value, setValue] = useState<string>("");
  return (
    <View
      style={styles.container}
    >
      <TextInput
        value={value}
        onChangeText={(e) => setValue(e)}
        style={styles.input}
        placeholder="Search....."
        placeholderTextColor={"#677294"}
      />
      <AntDesign
        style={styles.searchIcon}
        name="search1"
        color={"#677294"}
        size={20}
      />
      {value && (
        <AntDesign
          onPress={() => setValue("")}
          style={styles.closeIcon}
          name="close"
          color={"#677294"}
          size={20}
        />
      )}
    </View>
  );
};

export default SearchInput;




const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 10,
    shadowRadius: 4,
    elevation: 5,
    height: 54,
    position: "absolute",
    bottom: -25,
    zIndex: 1,
    width: "100%",
  },
  input: {
    flex: 1,
    paddingHorizontal: 40,
    height: "100%",
    fontSize:15,
    fontFamily: "Rubik-Regular",
    color:"#677294"
  },
  searchIcon: {
    position: "absolute",
    left: 10,
  },
  closeIcon: {
    position: "absolute",
    right: 10,
  },
});

