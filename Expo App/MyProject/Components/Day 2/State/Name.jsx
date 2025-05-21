import { useState } from "react";
import { Text, View ,Button} from "react-native";

const Name = () => {
    let [Data, setDate] = useState("Sumit")


    const ChangeHandle=()=>{
        setDate("Raj")
    }
    return (
        <>
            <View style={{marginBottom:10}}>
                <Text style={{fontSize:50 ,color:"white",backgroundColor:"black",padding:10,borderRadius:10}}>{Data}</Text>
            </View>
            <View>
                <Button title="Chane Name" onPress={ChangeHandle}/>
            </View>
        </>
    )
}

export default Name