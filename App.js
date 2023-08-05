// App.js
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStartedScreen from './GetStartedScreen';
import Registration from './Registration';
import QRGeneratedScreen from './QRGeneratedScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="GetStarted">
      <Stack.Screen name="WELCOME TO PSGTECH" component={GetStartedScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="QRGeneratedScreen" component={QRGeneratedScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
