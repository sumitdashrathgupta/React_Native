import { ActivityIndicator, Button, Text,View } from "react-native";

const Loder=()=>{
    return(
        <View>
            <ActivityIndicator size={50} color={"red"}/>
            <ActivityIndicator size={50} color={"green"}/>
            <Button title="press Loder"></Button>
        </View>
    )
}

export default Loder