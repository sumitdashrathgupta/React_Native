import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Demo from "./Components/Day 1/Demo"
// import State from "./Components/Day 2/State/Name"
import Props from "./Components/Day 2/Props/Parent"

export default function App() {
  return (
    <View style={styles.container}>
      <Props />
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
