import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login'; 
import Splash from './screens/Splash';
//import RootLayout from './_layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

const Stack = createNativeStackNavigator(); 

const App: React.FC = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='login' component={login} options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" component={() => null} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

