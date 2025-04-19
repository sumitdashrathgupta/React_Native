import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  let [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button style={styles.btn} onPress={() => setCount(count + 1)} title="Inc" />
      <Button style={styles.btn} onPress={() => setCount(count - 1)} title="Dec" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
    backgroundColor: "black",
    fontSize: 40,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
    fontWeight: 600,
  },
  btn:{
    padding:30,
    margin:10,
    backgroundColor:"blue",
  },
});
