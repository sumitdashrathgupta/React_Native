import { View, Text, Button, TouchableOpacity,StyleSheet, Pressable} from "react-native";

const Botton = () => {
    return (
        <View>
            <Text>This is a Button Section</Text>
            <Button style={Styles.btn} title="Cleck me"></Button>
            <TouchableOpacity>
               <Text style={Styles.btn1}>Cleck 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text style={Styles.btn2}>Cleck 2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text style={Styles.btn3}>Cleck 3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text style={Styles.btn4}>Cleck 4</Text>
            </TouchableOpacity>
        </View>
    )
}


const Styles=StyleSheet.create({
    // btn:{
    //   ❌  backgroundColor:"green",
    //     color:"gray"
    // },
    btn1:{
        backgroundColor:'blue',
        color:"white",
        padding:10,
        marginBottom:10,
        marginTop:10,
        textAlign:"center",
        borderRadius:10,
        fontSize:20,
        fontWeight:600
    },
    btn2:{
        backgroundColor:'green',
        color:"white",
        padding:10,
        marginBottom:10,
        marginTop:10,
        textAlign:"center",
        borderRadius:10,
        fontSize:20,
        fontWeight:600
    },
    btn3:{
        backgroundColor:'gray',
        color:"white",
        padding:10,
        marginBottom:10,
        marginTop:10,
        textAlign:"center",
        borderRadius:10,
        fontSize:20,
        fontWeight:600
    },
    btn4:{
        backgroundColor:'red',
        color:"white",
        padding:10,
        marginBottom:10,
        marginTop:10,
        textAlign:"center",
        borderRadius:10,
        fontSize:20,
        fontWeight:600
    }
})


export default Botton