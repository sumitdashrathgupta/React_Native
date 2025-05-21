import { Text, View,Button } from "react-native";


// ! Parent to child

// const Child = (props) => {
//     return (
//         <>
//             <Text style={{ fontSize: 20, color: "green", textAlign: "center" }}>Name : {props.name}</Text>
//             <Text style={{ fontSize: 20, color: "green", textAlign: "center" }}>Age : {props.age}</Text>
//         </>
//     )
// }

// export default Child


//! child to parent

const Child=({Data})=>{
    return(
        <>
        <View>
        <Button title="Change" onPress={()=>Data("Bhabhi")}/>
        </View>
        </>
    )
}

export default Child

