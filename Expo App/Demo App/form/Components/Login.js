import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const submitData = () => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login Form</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setData({ ...data, email: value })}
          value={data.email}
          placeholder="Enter the email"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setData({ ...data, password: value })}
          value={data.password}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <Button title="Submit" onPress={submitData} />
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
  login: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "600", // Fixed: make it a string
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    width: 250, // Optional: to make input look better
  },
});
