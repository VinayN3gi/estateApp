import { ActivityIndicator, Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Search from '@/components/Search';
import { FeaturedCard, RegularCard } from '@/components/Cards';
import Filters from '@/components/Filters';
import seed from '@/lib/seed';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getLatestProperties, getProperties } from '@/lib/appwrite';
import { Property } from '@/lib/propertyInterface';
import NoResults from '@/components/NoResults';

export default function home() {
  const {user}=useAuth();
  const router=useRouter();
  const params=useLocalSearchParams<{query?:string;filter?:string}>()
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties,setFilteredProperies]=useState<Property[]>([]);
  const [loadingAll,setLoadingAll]=useState(false);

  const [loadingFiltered,setLoadingFiltered]=useState(false);


  const handleCardPress=(id:string)=>router.push(`/property/${id}`);


  useEffect(()=>{
    fetchLatest()
  },[])

  useEffect(()=>{
    fetchFiltered()
  },[params.filter,params.query])

  const fetchLatest=async ()=>{
    setLoadingAll(true)
    const data :Property[]=await getLatestProperties()
    setProperties(data);
    setLoadingAll(false)
  }

  const fetchFiltered=async ()=>{
    setLoadingFiltered(true)
    const data:Property[]=await getProperties({filter : params.filter!,query:params.query!})
    setFilteredProperies(data)
    setLoadingFiltered(false)
  }



  if(loadingAll)
  {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white px-6">
        <ActivityIndicator size="large" className='color-primary-300' />
        <Text className="mt-4 text-lg font-rubik-medium text-black-300">Fetching properties...</Text>
      </SafeAreaView>
    );
  }

  else if(loadingFiltered)
  {
    return(
      <SafeAreaView className='h-full bg-white px-6'>
         <View className='my-5 flex flex-1'>
          <View className='flex flex-row items-center justify-between mt-14'>
            <Text className='text-xl font-rubik-bold text-black-300'>Featured</Text>
            <Text className='text-base font-rubik-bold text-primary-300'>See All</Text>
          </View>

          <FlatList data={properties}
          keyExtractor={(item)=>item.$id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerClassName='flex gap-5'
          renderItem={({item})=><FeaturedCard item={item} onPress={()=>handleCardPress(item.$id)}/>}
          />

          <View className='flex flex-row items-center justify-between mt-5'>
            <Text className='text-xl font-rubik-bold text-black-300'>Our Recommendation</Text>
            <Text className='text-base font-rubik-bold text-primary-300'>See All</Text>
          </View>
          </View>
          <Filters/>
          <View className="flex-1 items-center justify-center bg-white px-6">
          <ActivityIndicator size="large" className='color-primary-300' />
          <Text className="mt-4 text-lg font-rubik-medium text-black-300">Fetching properties...</Text>
        </View>
      </SafeAreaView>
    )
  }


  return (

    <SafeAreaView className='h-full bg-white px-6'>
      <FlatList
      data={filteredProperties}
      renderItem={({item})=><RegularCard item={item} onPress={()=>handleCardPress(item.$id)}/>}
      keyExtractor={(item)=>item.$id}
      numColumns={2}
      contentContainerClassName='pb-32'
      columnWrapperClassName='flex gap-3 '
      ListEmptyComponent={
        <NoResults/>
      }
      showsVerticalScrollIndicator={false}
      
      ListHeaderComponent={
        <>
        <View className='my-5 flex flex-1'>
          <View className='flex flex-row items-center justify-between mt-14'>
            <Text className='text-xl font-rubik-bold text-black-300'>Featured</Text>
            <Text className='text-base font-rubik-bold text-primary-300'>See All</Text>
          </View>

          <FlatList data={properties}
          keyExtractor={(item)=>item.$id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerClassName='flex gap-5'
          renderItem={({item})=><FeaturedCard item={item} onPress={()=>handleCardPress(item.$id)}/>}
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