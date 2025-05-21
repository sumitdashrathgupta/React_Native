//! Counter app using usestate hook in react

import { useState } from "react";
import { View, Text, Button } from "react-native";

const State = () => {
    let [data, setData] = useState(0)
    return (
        <>
            <View>
                <Text style={{ textAlign: "center", marginBottom: 10, fontSize: 20 }}>{data}</Text>
            </View>
            <View>
                <Button color={"green"} onPress={() => setData(data + 1)} title="Incerments" />
                <Button color={"red"} onPress={() => setData(data - 1)} title="Decerments" />
            </View>
        </>
    )
}

export default State