import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function Tag ({ value, onChange }) {
  const [isActive, setIsActive] = useState(true)

  const handlePress = () => {
    setIsActive(!isActive)
    onChange(value, !isActive)
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={
        [styles.container, isActive ? styles.activeContainer : styles.inactiveContainer]
      }
    >
      <Text>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderWidth: 2,
    width: 80,
    height: 40
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
