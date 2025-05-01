import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login'; 
import Splash from './screens/Splash';
import RootLayout from './_layout';

const Stack = createNativeStackNavigator(); 

export default function App() { 
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name = 'login' component={login} options = {{headerShown: false}}/>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" component={RootLayout} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>

  );
}

