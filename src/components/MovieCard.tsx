import { Text, View, StyleSheet, Image } from 'react-native'
import { movie } from '../utils/Interfaces'

interface MovieCardProps {
 movieData: movie
}

const MovieCard = ({ movieData }: MovieCardProps) => (
 <View style={styles.container}>
  <Image
   source={{ uri: movieData.poster }}
   style={styles.poster}
   resizeMode="contain"
  />
  <View>
   <Text>{movieData.movie}</Text>
   <Text>Relase: {movieData.release_date}</Text>
   <Text>Director: {movieData.director}</Text>
   <Text>Character: {movieData.character}</Text>
   <Text>Duration: {movieData.movie_duration}</Text>
  </View>
 </View>
)

export default MovieCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  poster: {
    width: '40%',
    height: 200
  }
})
