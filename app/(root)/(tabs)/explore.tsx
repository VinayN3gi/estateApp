import { ActivityIndicator, Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { FeaturedCard, RegularCard } from '@/components/Cards';
import Filters from '@/components/Filters';;
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getLatestProperties, getProperties } from '@/lib/appwrite';
import { Property } from '@/lib/propertyInterface';
import NoResults from '@/components/NoResults';
const Explore = () => {
    const {user}=useAuth();
    const router=useRouter();
    const params=useLocalSearchParams<{query?:string;filter?:string}>()
    const [properties, setProperties] = useState<Property[]>([]);
    const [filteredProperties,setFilteredProperies]=useState<Property[]>([]);
    const [loadingAll,setLoadingAll]=useState(false);
    const handleCardPress=(id:string)=>router.push(`/property/${id}`);
  
    useEffect(()=>{
      fetchFiltered()
    },[params.filter,params.query])


    const fetchFiltered=async ()=>{
      setLoadingAll(true)
      const data:Property[]=await getProperties({filter : params.filter!,query:params.query!})
      setFilteredProperies(data)
      setLoadingAll(false)  
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
            <View className='mt-10'>
                <Filters/>
                <Text className='text-xl font-rubik-bold text-black-300 mt-5'>Found {filteredProperties.length} Properties</Text>
            </View>
        </>
        
        }
        />
      </SafeAreaView>
    )
}
export default Explore