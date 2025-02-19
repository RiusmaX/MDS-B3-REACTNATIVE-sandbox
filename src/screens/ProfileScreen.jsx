import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'

function ProfileScreen () {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default ProfileScreen
