import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { signIn } from '@/lib/appwrite';

const logIn = () => {
   
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLoading,setLoading]=useState(false);
  const router=useRouter();

  const handleLogin=async()=>{
    setLoading(true)
    try {
      await signIn(email,password);
      router.replace("/home")
    } 
    catch (error) {
      console.error("Sign In error",error);
    }
    setLoading(false);
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
        <ScrollView contentContainerStyle={{flexGrow:1}} className='px-6 py-12'>
        
        <Text className='text-lg text-center text-gray-800 font-light'>
            Welcome Back to ReState
        </Text>

        <Text className='text-3xl font-bold text-center mt-2'>
            Let's Continue Your Journey to {"\n"}
            <Text className='text-blue-500'>Your Ideal Home</Text>
        </Text>
        
        <Text className='text-lg text-center mt-12 text-gray-600'>Log in to ReState</Text>
        
        <TextInput
        className='mt-8 border border-gray-300 rounded-lg p-4 text-lg'
        placeholder='Enter your email'
        keyboardType='email-address'
        value={email}
        onChangeText={setEmail}
        />
        
        <TextInput
          className="mt-4 border border-gray-300 rounded-lg p-4 text-lg"
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          className="bg-blue-500 rounded-full py-4 mt-8 flex items-center justify-center"
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <Text className="text-white text-lg font-semibold">Log In</Text>
          )}
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600 text-base">Don't have an account? </Text>
          <TouchableOpacity onPress={()=>{
            router.push("/signUp")
          }}>
            <Text className="text-blue-500 font-medium text-base">Sign up</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default logIn