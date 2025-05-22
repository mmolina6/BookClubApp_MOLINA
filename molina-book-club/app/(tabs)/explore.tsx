import React, { useState, useEffect } from 'react';
import {TextInput, FlatList} from 'react-native';
import {View, VirtualizedList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type itemData = { 
  title: string;
  authors: {key: string; name: string;}[];
  key: string;
}; 

export default function Tab() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<itemData[]>([]);
  const [error, setError] = useState(null);

const fetchData = async() => { 
  if (!searchQuery.trim()) {
      setResults([]);
      return;
      }
  const url_open_lib = `https://openlibrary.org/subjects/${encodeURIComponent(searchQuery.toLowerCase())}.json`

  setLoading(true); 
  setError(null);

  try { 
    const response = await fetch (url_open_lib);

    if (!response.ok) {
        throw new Error (`HTTP error! status: ${response.status}`)}

    const data = await response.json();

    if (data.works && data.works.length > 0) {
        const f_results: itemData[] = data.works.map((work: any) => ({
            title: work.title || 'No Title',
            key: work.key,
            authors: work.authors || [],
            }));
      setResults(f_results);

    } else {
        setResults([]);
        alert(`No results for the subject: "${searchQuery}"` );
    }
  } catch (error: any) {
      console.error('Error: Could not fetch results', error);
      alert('Error: Could not fetch results' + error.message);
      setResults([]);
  } finally { 
    setLoading(false);
  }
};

useEffect(() => {
    const handler = setTimeout(() => {
        fetchData(); }, 800);

    return () => {
        clearTimeout(handler);
        };
    }, [searchQuery]);

const getItemCount = (data: itemData[]) => data.length;

const getItem = (data: itemData[], index: number) => data[index];

const renderItem = ({item}:{item:itemData}) => (
  <View style = {styles.item}>
    <Text style = {styles.title}> {item.title} </Text>
    <Text style={styles.author}>{item.authors ? item.authors.map(a => a.name).join(', ') : 'Unknown Author'}</Text>
  </View>
); 

  return (
   <View style = {{flex:1, marginHorizontal: 30, marginVertical: 20}}> 
    <TextInput 
      placeholder='Search' 
      clearButtonMode = 'always'
      style = {styles.searchBox}
      value = {searchQuery}
      onChangeText={setSearchQuery}
      returnKeyType="search"
      onSubmitEditing={fetchData}
    />
    <VirtualizedList
        data={results}
        initialNumToRender={5}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
        style = {styles.list}
    />
   </View>
  );
}

const styles = StyleSheet.create({
  list: { 
    padding: 10
  },
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
        borderRadius: 10,
  },
  item: { 
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold'
  },
  author: { 
    fontSize: 14, 
    color: '#555'
  },
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
}); 


