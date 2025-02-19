import { StyleSheet, Text, View } from 'react-native'

const colorTypesMap = {
  global: '#6fa8dc',
  dev: '#bcbcbc',
  dark: '#2d2d30',
  limit: '#e06666',
  beauf: '#e69138',
  blondes: '#ffe599'
}

function Joke ({ joke: { joke, answer, type } }) {
  return (
    <View style={{ ...styles.container, backgroundColor: colorTypesMap[type] }}>
      <Text>{type}</Text>
      <Text>{joke}</Text>
      <Text>{answer}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 15
  }
})

export default Joke
