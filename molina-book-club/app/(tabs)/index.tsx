import { View, Text, StyleSheet } from 'react-native';
//import {firestore, auth} from './firebaseConfig'; 
//import {firestore, auth} from '/Users/alemolina/Desktop/Grand Challenge/git-hub_repo/BookClubApp_MOLINA/molina-book-club/firebaseConfig.js'

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab [Home|Explore|Profile]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
