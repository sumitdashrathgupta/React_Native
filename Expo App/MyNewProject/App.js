import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import Home from "./Components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world . This a react native App</Text>
      <Button style={styles.btn} title="Click me"></Button>
      <StatusBar style="auto" />
      <Home />
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
  btn: {
    padding: 10,
    marginTop: 20,
  },
});
