import { getUser } from "@/lib/appwrite";
import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View,Text } from "react-native";

export default function Index() {
  
  const [isLoading,setLoading]=useState(true);
  const [isLoggedIn,setLoggedIn]=useState(false);

  useEffect(()=>{
    const checkAuth=async()=>{
      setLoading(true)
      const {success}=await getUser();
      setLoggedIn(success);
      setLoading(false);
    }
    checkAuth()
  },[])

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white px-6">
        <ActivityIndicator size="large" color="#007AFF" />
        <Text className="text-center text-gray-700 text-lg mt-4 font-medium">
          Authenticating... You will be redirected
        </Text>
      </View>
    );
  }

  return <Redirect href={isLoggedIn ? '/home' : '/onboarding'} />;
}
