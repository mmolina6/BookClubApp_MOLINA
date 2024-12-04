import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList} from 'react-native';
import { SearchBar } from 'react-native-screens';
import { SafeAreaView } from 'react-native';

const url_open_lib = 'https://openlibrary.org/search.json?q=${query}'

export default function Tab() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null); 
  const [fullData, setFullData] = useState([]); 

useEffect(() => { 
  setLoading(true); 
  //fetchBooks(url_open_lib); 
}, []);


  const handleSearch = (query: React.SetStateAction<string>) => 
    setSearchQuery(query); 

  return (
   <SafeAreaView style = {{flex:1, marginHorizontal: 20}}> 
    <TextInput 
      placeholder='Search' 
      clearButtonMode = 'always'
      style = {styles.searchBox}
      value = {searchQuery}
      onChangeText={(query) => handleSearch(query)}
    /> 

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: { 
    paddingHorizontal:20, 
        paddingVertical:10, 
        borderColor: 'skyblue',
        borderWidth: 1,
        borderRadius: 8,
  }
});
