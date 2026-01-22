import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const detail = () => {
  return (
    <View>
      <Text>Détail</Text>
      <Link href={'home'}>Chez Mohya</Link>
    </View>
  )
}

export default detail