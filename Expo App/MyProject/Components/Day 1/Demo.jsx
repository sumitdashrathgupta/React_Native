//! Demo of React Native Code . Live how to working 

import { Button, Text,View } from "react-native";

const Demo=()=>{

    const demo=()=>{
        alert("Ok")
    }
    const demo1=(v)=>{
        alert(v)
    }

    return(
        <View>
            <Text>Hello world</Text>
            <Button title="Cleck" onPress={demo}/>
            <Button title="Cleck value" onPress={()=>demo1("20")}/>
        </View>
    )
}

export default Demo