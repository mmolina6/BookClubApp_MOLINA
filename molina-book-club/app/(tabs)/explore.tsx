import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator} from 'react-native';
import { SearchBar } from 'react-native-screens';
import { SafeAreaView } from 'react-native';


export default function Tab() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]); 
  const [error, setError] = useState(null); 
  //const [fullData, setFullData] = useState([]); 

/*
useEffect(() => { 
  setLoading(true) 
  //fetchData(url_open_lib); 
}, []); */ 

//const fetchData = async(url_open_lib: string | URL | Request) => {

const fetchData = async() => { 
  if (!searchQuery) return; 
  const url_open_lib = `https://openlibrary.org/subjects/${searchQuery}.json`

  setLoading(true); 
  setError(null);

  try { 
    const response = await fetch (url_open_lib); 
    const data = await response.json(); 
    if (data.works && data.works.length > 0) { 
      setResults(data.works)
    } else { 
      alert('No results');
    }
  } catch (error) { 
    alert('Error: Could not fetch results');
  } finally { 
    setLoading(false);
  }
};

useEffect(() => { 
  if (searchQuery) { 
    fetchData(); 
  }
}, [searchQuery]); 


/*
  const fetchData = async() => {
    const url_open_lib = `https:/openlibrary.org/subjects/${searchQuery}.json`
    if (!searchQuery) return; 
  try { 
    const response = await fetch (url_open_lib); 
    const data = await response.json(); 
    if (data.cod == 200) { 
      setResults(data);
    } else { 
      alert('Error: No response')
    }
  } 
  catch (error) {
    alert('Error: Could not fetch data')
  }; 

  fetchData(); 

/*
    if (data.works && data.works.length > 0) { 
      setData(data.works);
    } else { 
      alert('No results found'); 
    }
  } catch (error) { 
    alert('Error: No response')
  } finally { 
    setLoading(false);
  } */ 
//fetchData(); 
const renderItems = ({item}) => ( 
  <View style = {styles.item}>
    <Text style = {styles.title}> {item.title} </Text>
    <Text style={styles.author}>{item.authors?.[0]?.name || 'Unknown Author'}</Text>
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
    <FlatList
        data={results}
        renderItem={renderItems}
        keyExtractor={(item) => item.key}
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


