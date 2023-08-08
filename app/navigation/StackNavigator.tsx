import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {FlashLight, Home, TextToSpeech} from '../screens';

const Stack = createStackNavigator();

function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FlashLight" component={FlashLight} />
      <Stack.Screen name="TextToSpeech" component={TextToSpeech} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
