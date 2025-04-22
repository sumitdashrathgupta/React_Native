import React from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const a = 13;
const Demo = () => {
  return (
    <View style={Styles.contents}>
      <Text style={Styles.text1}>Hello world</Text>
      <Text style={{ color: "red" }}>{a}</Text>
      <Text style={{ color: "red" }}>{a}</Text>
      {/* This is a button */}
      <Button title="check" />

      {/* This is a TouchableOpacity */}
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>Press Me</Text>
      </TouchableOpacity>

      {/* This is a Pressable */}
      <Pressable onPress={() => console.log("Pressed")}>
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
};

const Styles = StyleSheet.create({
  contents: {
    marginTop: 20,
  },
  text1: {
    color: "green",
    fontSize: 20,
    fontWeight: 500,
    paddingBottom: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    width: 150,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
  },
});

export default Demo;
