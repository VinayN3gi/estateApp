import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { signUp } from '@/lib/appwrite';

const SignUp = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isLoading,setLoading]=useState(false);
    const router=useRouter();

    const handleSignIn=async ()=>{
        setLoading(true);
        try {
          await signUp(email,password);
          router.replace("/home");
        } 
        catch (error)
        {
            console.log("Sign-up error",error);
        }
        setLoading(false);
    }


  return (
    <SafeAreaView className='flex-1 bg-white'>
        <ScrollView contentContainerStyle={{flexGrow : 1}} className='px-6 py-12'>

            <Text className='text-lg text-center text-gray-800 font-light'>
                Welcome to ReState
            </Text>

            <Text className='text-3xl font-bold text-center mt-2'>
                Let's Get You Closer to {"\n"}
                <Text className='text-blue-500'> Your Ideal Home</Text>
            </Text>
            
            <Text className='text-lg text-center mt-12 text-gray-600'>Create an account</Text>

            {/*Email input field */}
            <TextInput 
            className='mt-8 border border-gray-300 rounded-lg p-4 text-lg'
            placeholder='Enter your email'
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}/>

            {/*Password input field */} 
            <TextInput
            className='mt-4 border border-gray-300 rounded-lg p-4 text-lg'
            placeholder='Enter your password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            />

        <TouchableOpacity
          className="bg-blue-500 rounded-full py-4 mt-8 flex items-center justify-center"
          onPress={handleSignIn}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <Text className="text-white text-lg font-semibold">Sign In</Text>
          )}
        </TouchableOpacity>

          <View className='flex-row justify-center mt-6'>
            <Text className='text-gray-600 text-base'> Already have an account ?</Text>
            <TouchableOpacity onPress={()=>router.push("/logIn")}>
                <Text className='text-blue-500 font-medium text-base'>Log In</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

    </SafeAreaView>
  )
}

export default SignUp