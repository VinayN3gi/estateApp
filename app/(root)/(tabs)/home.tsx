import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext'
import Search from '@/components/Search';
import { FeaturedCard, RegularCard } from '@/components/Cards';

export default function home() {
  const {user}=useAuth();

  return (
    <SafeAreaView className='h-full bg-white px-6'>
      <Search/>
      
      <View className='my-5'>
        <View className='flex flex-row items-center justify-between'>
          <Text className='text-xl font-rubik-bol text-black-300'>Featured</Text>
          <Text className='text-base font-rubik-bold text-primary-300'>See All</Text>
        </View>
      </View>

      <View className='flex flex-row gap-5 mt-5'>
        <FeaturedCard/>
        <FeaturedCard/>
      </View>

      <View className='my-5'>
        <View className='flex flex-row items-center justify-between'>
          <Text className='text-xl font-rubik-bol text-black-300'>Recomendation</Text>
          <Text className='text-base font-rubik-bold text-primary-300'>See All</Text>
        </View>
      </View>

    <View className='flex flex-row gap-5 mt-5'>
         <RegularCard/>
        <RegularCard/>
    </View>


   


    </SafeAreaView>
  )
}