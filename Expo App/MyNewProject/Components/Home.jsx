import React from "react";
import { View, Text, Button } from "react-native";

const Home = () => {
  const check = () => {
    console.log("This is my first native code")
  };

  return (
    <>
      <View>
        <Text>Home</Text>
        <Button title="Change" onPress={check} color={"green"} />
      </View>
    </>
  );
};

export default Home;
