import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList} from 'react-native';

const SearchRecs = () => { 
  const [query, setQuery] = useState(''); 

}

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
