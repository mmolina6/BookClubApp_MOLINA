import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import { firebase_auth }from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
//import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

const login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = firebase_auth;

const signIn = async() => {
    setLoading(true);
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
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
        const response = await createUserWithEmailAndPassword(auth, email, password);
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

export default login;
