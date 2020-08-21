import React, {useState, useEffect} from 'react';
import {View, Button, Text, TextInput} from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(null);
  const displayValue = `Counter ${counter}`;

  useEffect(() => {
    if(counter<0){
        setError('The value  should be greatter than 0');
    } else {
        setError(null);
    }
  }, [counter]);

  return (
    <View style={{margin: 48}}>
      <Text testID="textLabel">{displayValue}</Text>
      <TextInput
        testID="counterText"
        value={counter}
        placeholder="Enter counter"
        onChangeText={text => setCounter(Number(text))}
      />
     { error && <Text style={{ color: 'red'}} testID="textError">{error}</Text>}
      <Button
        testID="btnIncrement"
        title="Incrementar"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        testID="btnDecrement"
        title="Decrementar"
        onPress={() => setCounter(counter - 1)}
      />
    </View>
  );
};

export default Counter;
