import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import List from "./Components/List"


export default function App() {
  return (
    <View style={styles.container}>
      <List/>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
  },
  box: {
    backgroundColor: "blue",
    width: 70,
    color: "white",
    padding: 20,
    borderRadius: 10,
    margin: 5,
  },
});
