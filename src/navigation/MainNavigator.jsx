import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import JokeScreen from '../screens/JokeScreen'

const Stack = createNativeStackNavigator()
function MainNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Blague' component={JokeScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator
