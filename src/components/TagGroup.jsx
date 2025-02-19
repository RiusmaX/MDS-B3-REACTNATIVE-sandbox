import { View } from 'react-native'
import Tag from './Tag'

function TagGroup ({ tags, setTags }) {
  const handleChange = (value, isActive) => {
    const _tags = tags
    const index = _tags.findIndex(t => t.value === value)
    _tags[index].active = isActive
    setTags(tags)
  }

  return (
    <View style={{ height: 100, flex: 1, flexDirection: 'row', gap: 5, flexWrap: 'wrap' }}>
      {
        tags.map(tag => (
          <Tag key={tag.value} value={tag.value} onChange={handleChange} />
        ))
      }
    </View>
  )
}

export default TagGroup
