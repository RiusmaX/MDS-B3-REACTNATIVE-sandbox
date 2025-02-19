/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'

import {
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native'
import Clock from './components/Clock'

function App () {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
      >
        <View>
          <Text>COUCOU</Text>
          <Clock fontSize={50} interval={2000} />
          <Clock fontSize={80} />
          <Clock fontSize={10} />
          <Clock fontSize={30} />
          <Clock fontSize={100} />
          <Clock fontSize={20} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
