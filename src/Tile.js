import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Tile(props) {
  return (
    <View style={styles.tile}>
      <Text style={styles.tileName}>{props.name}</Text>
      <View style={{ flex: 1 }} />
      <View style={styles.prices}>
        <View style={styles.tilePrice}>
          <Text style={{ color: "#4f617d", fontSize: 16 }}>Silver</Text>
          <Text style={styles.p1}>{props.SPrice}</Text>
        </View>
        <View style={styles.tilePrice}>
          <Text style={{ color: "#4f617d", fontSize: 16 }}>Gold</Text>
          <Text style={styles.p2}>{props.GPrice}</Text>
        </View>
        <View style={styles.tilePrice}>
          <Text style={{ color: "#4f617d", fontSize: 16 }}>Amount</Text>
          <Text style={styles.p3}>{props.Amount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  tileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
    color: "#4f617d"
  },
  tile: {
    color: "#4f617d",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 20,
    marginBottom: 10,
    borderColor: "black",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 12,
    elevation: 4,
    flexDirection: "column"
  },
  prices: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 30,
    marginBottom: 20
  }
});

export default Tile;
