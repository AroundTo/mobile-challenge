import { Text, View, StyleSheet, Image } from 'react-native'
import { movie } from '../utils/Interfaces'

interface InfoProps {
 title: string
 data: string | number
 color: boolean
}

const Info = ({ title, data, color }: InfoProps) => (
 <View
  style={{ ...styles.info, backgroundColor: color ? '#ade8f4' : 'transparent' }}
 >
  <Text style={styles.text}>{title}</Text>
  <Text style={styles.text}>{data}</Text>
 </View>
)

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
  <View style={styles.data}>
   <Text style={styles.name}>{movieData.movie}</Text>
    <Info title="Relase:" data={movieData.release_date} color={true} />
    <Info title="Director:" data={movieData.director} color={false} />
    <Info title="Character:" data={movieData.character} color={true} />
    <Info title="Duration:" data={movieData.movie_duration} color={false} />
   </View>
 </View>
)

export default MovieCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#caf0f8',
    marginVertical: 7.5,
    marginHorizontal: 10,
    borderRadius: 20
  },
  data: {
    flex: 1,
    paddingVertical: 5,
  },
  poster: {
    width: '40%',
    height: 200,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignSelf: 'center'
  },
  name: {
    color: '#03045e',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  text: {
    color: '#023e8a'
  }
})
