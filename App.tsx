import { useEffect, useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from 'react-native'

import MovieCard from './src/components/MovieCard'
import { movie } from './src/utils/Interfaces'

const App = () => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [movies, setMovies] = useState<Array<movie>>([])
  const [loading, setLoading] = useState(true)
  const URL = 'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=100'

  useEffect(() => {
    const getData = async () => {
      fetch(URL)
        .then(value => value.json())
        .then((value:Array<movie>) => {
          setMovies(filterList(value)
          )
          setLoading(false)
        })
    }
    if (!movies.length) { getData() }
  }, [movies])

  const filterList = (movieList: Array<movie>) => {
    movieList = movieList.sort((a:movie, b:movie) => {
      const dateA = new Date(a.release_date)
      const dateB = new Date(b.release_date)
      if (dateA < dateB) return -1
      if (dateA > dateB) return 1
      return 0
    })

    let lastMovieName = ''

    movieList = movieList.filter((value) => {
      if (value.movie === lastMovieName) {
        return false
      }
      lastMovieName = value.movie
      return true
    })

    return movieList
  }

  const btnOrder = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc')
    setMovies(movies.reverse())
  }

  if (loading) {
    return <ActivityIndicator size="large" color="blue" style={styles.loading} />
  }
  return (
  <View style={styles.container}>
   <StatusBar style="inverted" translucent={false} />
   <Text style={styles.title}>Movies from the Owen Willson API</Text>
   <FlatList
    data={movies}
    renderItem={({ item }) => <MovieCard movieData={item} />}
    keyExtractor={(item, index) => index.toString()}
   />
   <TouchableOpacity onPress={btnOrder} style={styles.btnOrder}>
     <Text style={styles.btnOrderText}>{order === 'asc' ? 'Asc' : 'Desc'}</Text>
   </TouchableOpacity>
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
    paddingVertical: 20,
    backgroundColor: '#023e8a',
    color: 'white',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  btnOrder: {
    backgroundColor: '#0077b6',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16

  },
  btnOrderText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20
  }
})

export default App
