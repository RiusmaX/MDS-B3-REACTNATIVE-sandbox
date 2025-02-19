import { Button, ScrollView, Text, View } from 'react-native'
import Clock from '../components/Clock'
import { useNavigation } from '@react-navigation/native'

function HomeScreen () {
  const navigation = useNavigation()

  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
    >
      <View>
        <Text>COUCOU</Text>
        <Clock fontSize={50} interval={2000} />
        <Clock fontSize={80} />
        <Button
          onPress={() => navigation.navigate('Profile')}
          title='Aller au profil'
        />
        <Button
          onPress={() => navigation.navigate('Blague')}
          title='Je veux une blague'
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
