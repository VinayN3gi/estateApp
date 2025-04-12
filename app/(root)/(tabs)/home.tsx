import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext'

export default function home() {
  const {user}=useAuth();

  return (
    <View>
      <Text>{user?.email}</Text>
    </View>
  )
}

