import { ActivityIndicator, Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Search from '@/components/Search';
import { FeaturedCard, RegularCard } from '@/components/Cards';
import Filters from '@/components/Filters';
import seed from '@/lib/seed';
import { useLocalSearchParams } from 'expo-router';
import { getLatestProperties, getProperties } from '@/lib/appwrite';
import { Property } from '@/lib/propertyInterface';

export default function home() {
  const {user}=useAuth();
  const params=useLocalSearchParams<{query?:string;filter?:string}>()
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties,setFilteredProperies]=useState<Property[]>([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    fetchLatest()
  },[])

  useEffect(()=>{
    fetchFiltered()
  },[params.filter,params.query])

  const fetchLatest=async ()=>{
    setLoading(true)
    const data :Property[]=await getLatestProperties()
    setProperties(data);
    setLoading(false)
  }

  const fetchFiltered=async ()=>{
    setLoading(true)
    console.log(params.filter,params.query)
    const data:Property[]=await getProperties({filter : params.filter!,query:params.query!,limit:6})
    setFilteredProperies(data)
    setLoading(false)
  }




  if(loading)
  {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white px-6">
        <ActivityIndicator size="large" className='color-primary-300' />
        <Text className="mt-4 text-lg font-rubik-medium text-black-300">Fetching properties...</Text>
      </SafeAreaView>
    );
  }

  return (

    <SafeAreaView className='h-full bg-white px-6'>
      <FlatList
      data={properties}
      renderItem={({item})=><RegularCard/>}
      keyExtractor={(item)=>item.$id}
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

          <FlatList data={filteredProperties}
          keyExtractor={(item)=>item.$id}
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