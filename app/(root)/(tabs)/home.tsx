import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext'

export default function home() {
  const {user}=useAuth();

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView contentContainerStyle={{flexGrow:1}} className='px-6 py-12'>
        <Text>
          Home
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}