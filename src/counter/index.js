import React, { useState } from 'react'
import { View, Button, Text } from "react-native";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const displayCounter = `Count: ${counter}`;

    return (
        <View style={{ margin: 48 }}>
            <Text testID="displayText" >{displayCounter}</Text>
            <Button testID="btnIncrement" title="Incrementar" onPress={() => setCounter(counter + 1)} />
            <Button testID="btnDecrement" title="Decrementar" onPress={() => setCounter(counter - 1)}  />
        </View>
    )
}

export default Counter;
