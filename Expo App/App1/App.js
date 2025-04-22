import { StyleSheet, View } from "react-native";
// import Demo from "./Components/Demo"
// import State from "./Components/State";
import Props from "./Components/Props/Parent"

const a = 12;

export default function App() {
  return (
    <View style={Styles.contents}>
      <Props />
    </View>
  );
}

const Styles = StyleSheet.create({
  contents: {
    marginTop: 30,
    marginHorizontal: 10,
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
  },
});
