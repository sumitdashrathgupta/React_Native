import { ScrollView, Text, View } from "react-native";

const MapList = () => {
  const users = [
    {
      id: 1,
      name: "sumit",
      age: 34,
    },
    {
      id: 2,
      name: "Amit",
      age: 15,
    },
    {
      id: 3,
      name: "Raj",
      age: 33,
    },
    {
      id: 10,
      name: "Ajay",
      age: 30,
    },
    {
      id: 7,
      name: "Aman",
      age: 25,
    },
    {
      id: 6,
      name: "Demo",
      age: 35,
    },
    {
      id: 25,
      name: "sys",
      age: 40,
    },
    {
      id: 24,
      name: "sys",
      age: 40,
    },
    {
      id: 23,
      name: "sys",
      age: 40,
    },
    {
      id: 22,
      name: "sys",
      age: 40,
    },
    {
      id: 21,
      name: "sys",
      age: 40,
    },
    {
      id: 20,
      name: "system",
      age: 40,
    },
    {
      id: 26,
      name: "system",
      age: 40,
    },
    {
      id: 27,
      name: "system",
      age: 40,
    },
    {
      id: 28,
      name: "system",
      age: 40,
    },
  ];
  return (
    <>
      <View style={{ padding: 20 }}>
        <ScrollView horizontal>
          {users.map((item) => (
            <Text
              key={item.id}
              style={{
                fontSize: 20,
                marginVertical: 4,
                backgroundColor: "blue",
                padding: 30,
                color: "white",
                fontWeight: 600,
                marginLeft: 10,
                borderRadius: 50,
              }}
            >
              {item.name}
            </Text>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default MapList;
