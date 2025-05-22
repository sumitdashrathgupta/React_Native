import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Demo from "./Components/Day 1/Demo"
// import State from "./Components/Day 2/State/Name"
// import Props from "./Components/Day 2/Props/Parent"
import From from "./Components/Day 3/Form"

export default function App() {
  return (
    <View style={styles.container}>
      <From />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
