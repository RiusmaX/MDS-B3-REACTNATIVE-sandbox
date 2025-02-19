import { View } from 'react-native'
import Tag from './Tag'

function TagGroup ({ tags }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row', gap: 5, flexWrap: 'wrap' }}>
      {
        tags.map(tag => (
          <Tag key={tag} value={tag} />
        ))
      }
    </View>
  )
}

export default TagGroup
