import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import Tile from "./Tile";

function MainBody() {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.mainBody}>
      <TextInput style={styles.searchInput} defaultValue="Search Party" />
      <View style={styles.toggle}>
        <TouchableOpacity
          style={[styles.button, !open ? styles.activeButton : null]}
          onPress={() => setOpen(false)}
        >
          <Text
            style={[styles.buttonText, !open ? styles.activeButtonText : null]}
          >
            Both
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, open ? styles.activeButton : null]}
          onPress={() => setOpen(true)}
        >
          <Text
            style={[styles.buttonText, open ? styles.activeButtonText : null]}
          >
            Gold
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, open ? styles.activeButton : null]}
          onPress={() => setOpen(true)}
        >
          <Text
            style={[styles.buttonText, open ? styles.activeButtonText : null]}
          >
            Silver
          </Text>
        </TouchableOpacity>
      </View>
      <Tile
        name="Stock"
        SPrice="-14500.00 Gms"
        GPrice="+133.500 Gms"
        Amount="+₹6,76,000"
      />
      <Tile
        name="Karigar"
        SPrice="-14500.00 Gms"
        GPrice="+133.500 Gms"
        Amount="+₹6,76,000"
      />
      <Tile
        name="Supplier"
        SPrice="-14500.00 Gms"
        GPrice="+133.500 Gms"
        Amount="+₹6,76,000"
      />
      <Tile
        name="Bullion"
        SPrice="-14500.00 Gms"
        GPrice="+133.500 Gms"
        Amount="+₹6,76,000"
      />
      <Tile
        name="Customer"
        SPrice="-14500.00 Gms"
        GPrice="+133.500 Gms"
        Amount="+₹6,76,000"
      />

      {open && (
        <View style={[styles.addPopup, { position: "absolute" }]}>
          <View style={styles.addMan}>
            <TouchableOpacity style={styles.addButton1}>
              <Image
                source={require("../public/Add Party Icon in Plus Bar.png")}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
            <Text>{"\n"}</Text>

            <TouchableOpacity style={[styles.addButton1]}>
              <Image
                source={require("../public/Transactions in Plus Bar.png")}
                style={{ width: 300, height: 50 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.addButton}>
        <Image
          source={require("../public/flat-color-icons_plus.png")}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    marginHorizontal: 30
  },
  searchInput: {
    width: "100%",
    color: "#acacac",
    borderColor: "#acacac",
    borderWidth: 1,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 14,
    borderRadius: 5,
    marginVertical: 10
  },
  toggle: {
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 15
  },
  button: {
    width: 50,
    height: 21,
    marginLeft: 5,
    borderRadius: 10,
    borderColor: "#7f90ab",
    backgroundColor: "white",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  activeButton: {
    backgroundColor: "#7f90ab"
  },
  buttonText: {
    color: "#4f617d"
  },
  activeButtonText: {
    color: "white"
  },
  tilePrice: {
    marginHorizontal: 10
  },
  p1: {
    color: "red"
  },
  p2: {
    color: "green"
  },
  p3: {
    color: "green"
  },
  addButton: {
    left: "90%",
    marginBottom: 10
  },
  addPopup: {
    position: "absolute",
    top: "77%",
    left: 0,
    right: 0,
    backgroundColor: "#f1f2ff",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  addMan: {
    justifyContent: "center"
  },
  addButton1: {
    display: "block"
  }
});

export default MainBody;
