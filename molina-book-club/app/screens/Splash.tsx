import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useRouter } from 'expo-router';
//import { useNavigation} from 'expo-router';

//type SplashProps = StackScreenProps<any, 'Splash'>;

/*
type RootStackParamList = {
  Login: undefined;
  Splash: undefined;
  '(tabs)': undefined; 
};

type SplashProps = StackScreenProps<any, 'Splash'>;
*/

const Splash: React.FC<SplashProps> = ({navigation}) => {
    const router = useRouter();
  //const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
        router.replace('/Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
      <Image style={styles.image} source={require('../../assets/images/logo_novelNet.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
  image: {
    width: '50%',
    resizeMode: 'cover',
    height: 200,
  }
});

export default Splash;