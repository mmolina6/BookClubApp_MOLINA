import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-screens';
import { SafeAreaView } from 'react-native';

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
