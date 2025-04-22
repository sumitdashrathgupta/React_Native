import { View,Text } from "react-native";
import Child from "./Child"

const Parent=()=>{
    return(
        <View>
            <Text>Parent</Text>
            <Child name="Sumit"/>
        </View>
    )
}

export default Parent