import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Radio_buttons = () => {
    return (
        <View>
            <Text style={Styles.text1}>Radio buttons</Text>
            <TouchableOpacity>
                <View style={Styles.radio1}>
                    <Text style={Styles.radio}></Text>
                    <Text style={Styles.male}>Mela</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={Styles.radio1}>
                    <Text style={Styles.radio}></Text>
                    <Text style={Styles.male}>FeMale</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const Styles = StyleSheet.create({
    text1: {
        fontSize: 20,
        color: "gray",
        marginBottom: 50,
    },
    male: {

    },
    Female: {

    },
    radio: {
        borderWidth: 1,
        borderRadius: 20,
        height: 30,
        width: 30
    }, 
    
})

export default Radio_buttons