// This is a used in FlatList

import { Text, View ,FlatList} from "react-native";

const List=()=>{

    const users=[
        {
            id:1,
            name:"sumit",
            age:34,
        },
        {
            id:2,
            name:"Amit",
            age:15,
        },
        {
            id:3,
            name:"Raj",
            age:33,
        },
        {
            id:10,
            name:"Ajay",
            age:30,
        },
        {
            id:7,
            name:"Aman",
            age:25,
        },
        {
            id:6,
            name:"Demo",
            age:35,
        },
        {
            id:25,
            name:"sys",
            age:40,
        },
        {
            id:24,
            name:"sys",
            age:40,
        },
        {
            id:23,
            name:"sys",
            age:40,
        },
        {
            id:22,
            name:"sys",
            age:40,
        },
        {
            id:21,
            name:"sys",
            age:40,
        },
        {
            id:20,
            name:"system",
            age:40,
        },
    ]
    return(
        <>
        <View>
            <FlatList 
            data={users}
            renderItem={({item})=><Text style={{margin:5,backgroundColor:"blue",color:"white",fontSize:20,padding:20}}>{item.name}</Text>}
            keyExtractor={item=>item.id}
            />
        </View>
        </>
    )
}

export default List