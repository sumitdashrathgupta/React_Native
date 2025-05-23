// This is a used in SectionList

import { Text, View, FlatList } from "react-native";

const SectionList = () => {
  const users = [
    {
      id: 1,
      name: "sumit",
      age: 34,
      skill: ["java", "javascript", "source"],
    },
    {
      id: 2,
      name: "Amit",
      age: 15,
      skill: ["c++", "c", "Python"],
    },
    {
      id: 3,
      name: "Raj",
      age: 33,
      skill: ["#c", "Typescript", "system"],
    },
  ];
  return (
    <>
      <View>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  fontSize: 20,
                  padding: 20,
                }}
              >
                {item.name}
              </Text>
              <Text>{item.age}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <SectionList
          sections={users}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default SectionList;
