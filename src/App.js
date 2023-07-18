import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Body from "./Body";

export default function App() {
  return (
    <View style={styles.container}>
      {/*
      <View
        style={[
          { position: "relative" },
          { height: "100vh" },
          { width: "100wh" },
          { backgroundColor: "black" }
        ]}
      ></View>
      */}
      <ScrollView>
        <Body />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerButton}>
          <Image
            source={require("../public/Vector.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.footerText}>Home</Text>
        </View>
        <View style={styles.footerButton}>
          <Image
            source={require("../public/bi_box-fill.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.footerText}>Boxes</Text>
        </View>
        <View style={styles.footerButton}>
          <Image
            source={require("../public/heroicons_currency-rupee-20-solid.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.footerText}>Books</Text>
        </View>
        <View style={styles.footerButton}>
          <Image
            source={require("../public/mingcute_more-3-fill.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.footerText}>More</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "sans-serif",
    margin: 0
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  footerButton: {
    alignItems: "center"
  },
  footerText: {
    color: "#979696",
    marginTop: 4
  }
});
