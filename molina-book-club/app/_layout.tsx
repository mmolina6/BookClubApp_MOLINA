import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Login from './screens/Login';
import Splash from './screens/Splash';
import TabLayout from './(tabs)/_layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

/*
type RootStackParamList = {
  Splash: undefined;
  login: undefined;
  '(tabs)': undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
*/

const RootLayout: React.FC = () => {
  return (
      <Stack>
        <Stack.Screen name='screens/Splash' options={{ headerShown: false }} />
        <Stack.Screen name='Login' options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
};
export default RootLayout;

/*
const RootLayout: React.FC = () => {
  return (
      <Stack>
        <Stack.Screen name='screens/Splash' options={{ headerShown: false }} />
        <Stack.Screen name='screens/Login' options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
};
export default RootLayout; */


