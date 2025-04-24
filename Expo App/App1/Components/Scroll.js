import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Scroll() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <Text style={styles.box}>first</Text>
        <Text style={styles.box}>first</Text>
        <Text style={styles.box}>first</Text>
        <Text style={styles.box}>first</Text>
        <Text style={styles.box}>first</Text>
        <Text style={styles.box}>first</Text>
        <Text style={styles.box}>first</Text>
        <Text style={styles.box}>first</Text>
        <Text style={styles.box}>first</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
