import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Tag ({ value }) {
  const [isActive, setIsActive] = useState(true)

  const handlePress = () => {
    setIsActive(!isActive)
  }

  return (
    <View
      onPress={handlePress}
      style={
        [styles.container, isActive ? styles.activeContainer : styles.inactiveContainer]
      }
    >
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderWidth: 2
  },
  activeContainer: {
    backgroundColor: '#93c47d',
    borderColor: '#6aa84f'
  },
  inactiveContainer: {
    backgroundColor: '#999999',
    borderColor: '#5b5b5b'
  }
})

export default Tag
