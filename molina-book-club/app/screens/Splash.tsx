import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';


type RootStackParamList = {
  login: undefined;
  Splash: undefined;
  '(tabs)': undefined; 
};

const Splash: React.FC<StackScreenProps<RootStackParamList, 'Splash'>> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]); 

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/logo_novelNet.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: "100%"
  }
});

export default Splash;