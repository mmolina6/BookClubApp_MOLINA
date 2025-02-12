import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => { 
    setTimeout(() => { 
      navigation.navigate('Home');
    }, 3000)
  }); 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/logo_v2.png')} />
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