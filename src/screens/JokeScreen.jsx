import { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import Joke from '../components/Joke'
import TagGroup from '../components/TagGroup'

const BLAGUE_API_URL = 'https://www.blagues-api.fr/api'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTU2MTE2ODMyMzUwMjU3MjEyIiwibGltaXQiOjEwMCwia2V5IjoiZXh4Ylczclo4cnVmWUR1ck1qTW5SRk5FRmxtS1RSYTh4MzJ5UkxUeDFvSnB0eXFpcjAiLCJjcmVhdGVkX2F0IjoiMjAyNS0wMi0xOVQxMDowMzo1MSswMDowMCIsImlhdCI6MTczOTk1OTQzMX0.I7JpybM4sSzg53Y0a2nVFIhzW_F4MQwBHnDupkc0YRo'

const TAGS = [
  {
    value: 'global',
    active: true
  },
  {
    value: 'dev',
    active: true
  },
  {
    value: 'dark',
    active: true
  },
  {
    value: 'limit',
    active: true
  },
  {
    value: 'beauf',
    active: true
  },
  {
    value: 'blondes',
    active: true
  }
]

function JokeScreen () {
  const [joke, setJoke] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [tags, setTags] = useState(TAGS)

  const getJoke = async () => {
    try {
      const url = new URL('/random', BLAGUE_API_URL)

      for (const tag of tags) {
        if (!tag.active) {
          url.searchParams.append('disallow', tag.value)
        }
      }

      const response = await fetch(url.toString(), {
        headers: {
          Authorization: 'Bearer ' + API_KEY
        }
      })
      const data = await response.json()
      setJoke(data)
    } catch (error) {
      console.error(error)
    }
  }

  console.log(tags)

  useEffect(() => {
    getJoke()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Text>Joke Screen</Text>
      <TagGroup tags={tags} setTags={setTags} />
      {joke && <Joke joke={joke} />}
      <Button title='Nouvelle blague' onPress={getJoke} />
    </View>
  )
}

export default JokeScreen
