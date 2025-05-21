import { Text, View } from "react-native";
import Child from "./Child"
import { useState } from "react";

// ! Parent to child

// const Parent = () => {
//     return (
//         <>
//             <View>
//                 <Child name="sumit" age="20"/>
//             </View>
//         </>
//     )
// }

// export default Parent



//! child to parent

const Parent=()=>{
    let [data,setData]=useState("text")

    const sendData=(v)=>{
        setData(v)
    }
    return(
        <>
        <View>
            <Text>{data}</Text>
        </View>
        <View>
        <Child Data={sendData} />
        </View>
        </>
    )
}

export default Parent