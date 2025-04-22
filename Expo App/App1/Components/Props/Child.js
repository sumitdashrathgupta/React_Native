import { View,Text } from "react-native";

const Child=(props)=>{
    return(
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}

export default Child