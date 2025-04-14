import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { Property } from '@/lib/propertyInterface'


interface Props{
    onPress?:()=>void
    item:Property
}

export const FeaturedCard = ({onPress,item}:Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-80 relative'>
        <Image source={{uri:item.image}} className='size-full rounded-2xl'/>
        <Image source={images.cardGradient} className='size-full rounded-2xl absolute bottom-0'/>
        <View className='flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5'>
            <Image source={icons.star} className='size-3.5'/>
            <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>{item.rating}</Text>
        </View>
        <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
            <Text className='text-lg font-rubik-extrabold text-white w-full' numberOfLines={1}>{item.name}</Text>
            <Text className='text-base font-rubik text-white '>{item.address}</Text>
            <Text className='text-lg font-rubik-extrabold text-white'>{item.price}</Text>
        </View>
    </TouchableOpacity>
  )
}

export const RegularCard = ({onPress,item}:Props) => {
    return (
      <TouchableOpacity onPress={onPress} className='flex-1 w-full max-h-[18rem]  mt-4  px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-200 relative'>
        <View className='flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50'>
            <Image source={icons.star} className='size-2.5'/>
            <Text className='text-xs font-rubik-bold text-primary-300 ml-0.5'>{item.rating}</Text>
        </View>
            <Image source={{ uri: item.image }} className='max-h-40 size-full rounded-lg'/>
        <View className='flex flex-col mt-2'>
            <Text className='text-base font-rubik-bold text-black-300'>{item.name}</Text>
            <Text className='text-base font-rubik text-black-300 leading-none'>{item.address}</Text>
            <Text className='text-base font-rubik-bold text-primary-300'>{item.price}</Text>
        </View>
      </TouchableOpacity>
    )
}
  