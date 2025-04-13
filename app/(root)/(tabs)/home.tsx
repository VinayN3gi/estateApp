import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext'
import Search from '@/components/Search';
import { FeaturedCard, RegularCard } from '@/components/Cards';
import Filters from '@/components/Filters';
import seed from '@/lib/seed';

export default function home() {
  const {user}=useAuth();


  return (
    <SafeAreaView className='h-full bg-white px-6'>
      <FlatList
      data={[1,2,3,4]}
      renderItem={({item})=><RegularCard/>}
      keyExtractor={(item)=>item.toString()}
      numColumns={2}
      contentContainerClassName='pb-32'
      columnWrapperClassName='flex gap-3 '
      showsVerticalScrollIndicator={false}
      
      ListHeaderComponent={
        <>
        <Search />
        <View className='my-5'>
          <View className='flex flex-row items-center justify-between'>
            <Text className='text-xl font-rubik-bold text-black-300'>Featured</Text>
            <Text className='text-base font-rubik-bold text-primary-300'>See All</Text>
          </View>

          <FlatList data={[1,2,3]}
          keyExtractor={(item)=>item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerClassName='flex gap-5'
          renderItem={({item})=><FeaturedCard/>}
          />

          <View className='flex flex-row items-center justify-between mt-5'>
            <Text className='text-xl font-rubik-bold text-black-300'>Our Recommendation</Text>
            <Text className='text-base font-rubik-bold text-primary-300'>See All</Text>
          </View>
          </View>
          <Filters/>
          </>
      }
      />
    </SafeAreaView>
  )
}