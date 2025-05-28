import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Demo from "./Components/Day 1/Demo"
// import State from "./Components/Day 2/State/Name"
// import Props from "./Components/Day 2/Props/Parent"
// import From from "./Components/Day 3/Form"
// import Botton from "./Components/Day 6/Botton"
<<<<<<< HEAD
// import Radio_buttons from "./Components/Day 6/Radio_buttons"
import Loder from "./Components/Day 7/Loder"
=======
// import MapList from "./Components/Day 4/MapList"
//import Grid from "./Components/Day 5/Grid"
import Radio_buttons from "./Components/Day 6/Radio_buttons"
>>>>>>> 46474a30d4b82ffc3e4b9cb35f510f0cc25e3264

export default function App() {
  return (
    <View style={styles.container}>
      <Loder />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    marginBottom:20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
