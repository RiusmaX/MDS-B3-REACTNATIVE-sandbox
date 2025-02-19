import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Joke from '../components/Joke'
import TagGroup from '../components/TagGroup'

const BLAGUE_API_URL = 'https://www.blagues-api.fr/api'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTU2MTE2ODMyMzUwMjU3MjEyIiwibGltaXQiOjEwMCwia2V5IjoiZXh4Ylczclo4cnVmWUR1ck1qTW5SRk5FRmxtS1RSYTh4MzJ5UkxUeDFvSnB0eXFpcjAiLCJjcmVhdGVkX2F0IjoiMjAyNS0wMi0xOVQxMDowMzo1MSswMDowMCIsImlhdCI6MTczOTk1OTQzMX0.I7JpybM4sSzg53Y0a2nVFIhzW_F4MQwBHnDupkc0YRo'

const tags = [
  'global',
  'dev',
  'dark',
  'limit',
  'beauf',
  'blondes'
]

function JokeScreen () {
  const [joke, setJoke] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getJoke = async () => {
      const response = await fetch(BLAGUE_API_URL + '/random', {
        headers: {
          Authorization: 'Bearer ' + API_KEY
        }
      })
      const data = await response.json()
      setJoke(data)
    }
    getJoke()
  }, [])

  return (
    <View>
      <Text>Joke Screen</Text>
      <TagGroup tags={tags} />
      {joke && <Joke joke={joke} />}
    </View>
  )
}

export default JokeScreen
