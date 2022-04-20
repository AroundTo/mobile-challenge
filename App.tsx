import { useEffect, useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'

import MovieCard from './src/components/MovieCard'
import { movie } from './src/utils/Interfaces'

const App = () => {
  const [order, setOrder] = useState('asc')
  const [movies, setMovies] = useState<Array<movie>>([])
  const [loading, setLoading] = useState(true)
  const URL = 'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=100'

  useEffect(() => {
    const getData = async () => {
      fetch(URL).then((value) => value.json())
        .then((value) => {
          setMovies(value)
          setLoading(false)
        }
        )
    }

    getData()
  }, [])

  if (loading) {
    return (
      <ActivityIndicator size="large" color="blue" style={styles.loading}/>
    )
  }
  return (
 <View style={styles.container}>
    <StatusBar style="inverted" translucent={false}/>

    <Text style={styles.title}>Movies from the Owen Willson API</Text>

    <FlatList
    data={movies}
    renderItem={({ item }) => <MovieCard movieData={item}/>}
    keyExtractor={(item, index) => index.toString()}/>

 </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20
  }
})

export default App
