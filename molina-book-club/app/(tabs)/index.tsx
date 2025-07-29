import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Novel Net!</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Creating club')}>
        <Text style={styles.buttonText}>Create a Book Club</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={() => console.log('Joining club')}>
        <Text style={styles.buttonText}>  Join a Book Club  </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 20,
    paddingTop: 80,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4E93BD',
    paddingVertical: 30,
    paddingHorizontal: 48,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
