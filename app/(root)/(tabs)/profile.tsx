import {ActivityIndicator, Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import icons from '@/constants/icons';
import { settings } from '@/constants/data';
import { useRouter } from 'expo-router';
import { logOut } from '@/lib/appwrite';



interface SettingItemsProps
{
    icon :any;
    title:string;
    onPress:()=>void;
    textStyle?:string;
    showArrow?:boolean;
    isLoading? :boolean
}

const SettingItems=({icon ,title,onPress,textStyle,showArrow,isLoading=false}:SettingItemsProps)=>(
    <TouchableOpacity
    onPress={onPress}
    className='flex flex-row items-center justify-between py-3 w-full'
    disabled={isLoading}
  >
    <View className='flex flex-row items-center gap-3'>
      <Image source={icon} className='size-6' />
      {isLoading ? (
        <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>Logging out...</Text>
      ) : (
        <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
          {title}
        </Text>
      )}
    </View>
    {showArrow && <Image source={icons.rightArrow} className='size-5' />}
  </TouchableOpacity>
)

const Profile = () => {

    const router=useRouter();
    const [loading,isLoading]=useState(false);
    const handleLogout=async()=>{
        isLoading(true);
        try {
            const success=await logOut();
            if(success){
                router.push("/onboarding");
            }
        } catch (error) {
            Alert.alert("Logout failed");
        }
        isLoading(false);
    }

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView
            showsVerticalScrollIndicator={false} contentContainerClassName='pb-32 px-7'>
              <View>
                <Text className='text-xl font-rubik-bold mt-24'>Profile</Text>
              </View>
            
            <View className='flex flex-col mt-10 w-full '>
                <SettingItems  icon={icons.calendar} title='My Bookings' onPress={()=>{router.push("/comingSoon")}} showArrow={true}/>
                <SettingItems icon={icons.wallet} title="Payments" onPress={()=>{router.push("/comingSoon")}} showArrow={true}/>
               
            </View>
            <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
                {
                    settings.slice(2).map((item,index)=>(
                        <SettingItems key={index} {...item} showArrow={true} onPress={()=>{
                            router.push("/comingSoon")
                        }}/>
                    ))
                }
            </View>

            <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
            <SettingItems icon={icons.logout} title='Logout' textStyle='text-danger' showArrow={false} onPress={handleLogout} isLoading={loading}/>
            </View>
            
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profile
