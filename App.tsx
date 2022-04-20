import { useEffect, useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const App = () => {
  const [order, setOrder] = useState('asc')
  const [movies, setMovies] = useState<Array<Object>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=100').then((value) => value.json())
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
  <Text>Movies from the Owen Willson API</Text>
  <StatusBar style="auto" />
 </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
