import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';

const Stack = createNativeStackNavigator(); 

export default function App() { 
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name = 'login' component={login} options = {{headerShown: false}}> 
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

