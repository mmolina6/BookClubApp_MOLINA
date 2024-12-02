import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//const [genre] = useState<any>(null); 

//useEffect(() => 
  
export default function App() {
  return (
    <UIView style={styles.container}>
      <Text>Maria Alejandra Molina!</Text>
      <StatusBar style="auto" />
    </UIView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
