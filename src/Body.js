import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MainBody from "./MainBody";
function Body() {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.set1}>
        <Image
          source={require("../public/iconamoon_profile-circle-fill.png")}
          style={{ width: 35, height: 35 }}
        />
        <Text style={styles.name}>Mannalal Manaklal</Text>
      </View>
      <MainBody style={styles.mainBody} />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: "#f1f2ff"
  },
  name: {
    color: "#4f617d",
    margin: 13,
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 22
  },
  set1: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  mainBody: {
    marginHorizontal: 30
  }
});

export default Body;
