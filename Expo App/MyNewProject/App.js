import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text,  Image,View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world . This a react native App</Text>
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
});
