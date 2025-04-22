import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={Styles.maincontent}>
      <Text style={Styles.state}>{count}</Text>
      <View style={Styles.btn}>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={Styles.btn1}
        >
          <Text style={Styles.btn_text}>Inc</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCount(count - 1)}
          style={Styles.btn1}
        >
          <Text style={Styles.btn_text}>Dec</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  maincontent: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  btn: {
    flexDirection: "row",
  },
  state: {
    textAlign: "center",
    marginBottom: 10,
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 15,
    color: "white",
    fontWeight: 600,
    fontSize: 30,
  },
  btn1: {
    backgroundColor: "green",
    margin: 20,
    marginBottom: 0,
    marginTop: 0,
    borderRadius: 10,
  },
  btn_text: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    color: "white",
    fontSize: 15,
    fontWeight: 700,
  },
});

export default State;
