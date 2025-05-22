import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";


const Form = () => {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [Display, setDispaly] = useState(false)

    const handelevent = () => {
        setDispaly(false)
        setemail("")
        setpassword("")
        setname("")
    }

    return (
        <>
            <View>
                <Text style={Styles.text}>Fill Information</Text>
                <Text style={Styles.text1}>Name :</Text>
                <TextInput style={Styles.input} value={name} placeholder="Enter the name" onChangeText={(text) => setname(text)} />
                <Text style={Styles.text1}>Password :</Text>
                <TextInput style={Styles.input} value={password} placeholder="Enter the name" onChangeText={(text) => setpassword(text)} secureTextEntry={true} />
                <Text style={Styles.text1}>Email :</Text>
                <TextInput style={Styles.input} value={email} placeholder="Enter the name" onChangeText={(text) => setemail(text)} />
            </View>
            <View style={Styles.btn}>
                <Button color={"green"} title="Submit" onPress={() => setDispaly(true)} />
            </View>
            <View style={Styles.btn}>
                <Button color={"red"} title="clear" onPress={handelevent} />
            </View>
            <View>
                {Display ?
                    <View>
                        <Text>Name : {name}</Text>
                        <Text>Password : {password}</Text>
                        <Text>Email : {email}</Text>
                    </View> : null}
            </View>
        </>
    )
}


const Styles = StyleSheet.create({
    text: {
        color: 'green',
        fontSize: 40,
        fontWeight: 600,
    },
    input: {
        borderWidth: 2,
        marginBottom: 10,
    },
    text1: {
        fontSize: 15,
        marginBottom: 5,
    },
    btn: {
        width: 100,
        marginBottom: 10
    }
})

export default Form