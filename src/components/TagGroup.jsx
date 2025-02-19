import { View } from 'react-native'
import Tag from './Tag'

function TagGroup ({ tags }) {
  return (
    <View>
      {
        tags.map(tag => (
          <Tag key={tag} value={tag} />
        ))
      }
    </View>
  )
}

export default TagGroup
