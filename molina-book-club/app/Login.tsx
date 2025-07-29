import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  TabLayout: undefined;
};

const Login: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

  const signIn = () => {
    setLoading(true);
    setTimeout(() => {
      //alert('Login pressed (no Firebase)'); 
      setLoading(false);
      navigation.replace('(tabs)', { 
        screen: '_layout',
      });
    }, 1000);
  };

  const signUp = () => {
    setLoading(true);
    setTimeout(() => {
      alert('Register is not available');
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Top-Center Logo */}
      <Image
        source={require('../assets/images/logo_novelNet.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <TextInput
          secureTextEntry
          value={password}
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={setPassword}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Button title="Login" onPress={signIn} />
            <Button title="Register" onPress={signUp} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 0,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Login;

//
/*
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
//import { auth } from '../../firebaseConfig';
import auth from '@react-native-firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
//import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    //const auth = firebase_auth;

const signIn = async() => {
    setLoading(true);
    try {
        const response = await auth().signInWithEmailAndPassword(email, password);
        console.log(response)
    } catch (error:any){
        console.log(error);
        alert('Sign in failed' + error.message);
    } finally {
        setLoading(false);
    }
}

const signUp = async() => {
    setLoading(true);
    try {
        const response = await auth().createUserWithEmailAndPassword(email, password);
       //const user = response.user;

       // await firestore().collection('users').doc(user.uid).set({

           // })
        console.log(response)
        alert('Confirmation email sent')
    } catch (error:any){
        console.log(error);
        alert('Sign in failed' + error.message);
    } finally {
        setLoading(false);
    }
}

const styles = StyleSheet.create({
  container: {
      marginHorizontal: 20,
      flex: 1,
      justifyContent: 'center'
  },
  input: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#fff'
  }
});

return (
  <View style={styles.container}>
    <KeyboardAvoidingView behavior='padding'>
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        secureTextEntry={true}
        value={password}
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#000ff" />
      ) : (
        <>
          <Button title="Login" onPress={signIn} />
          <Button title="Register" onPress={signUp} />
        </>
      )}
    </KeyboardAvoidingView>
  </View>
)
}; 

export default Login;
*/
