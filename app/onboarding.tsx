import {Image, Animated, SafeAreaView,Text, View, TouchableOpacity, Alert} from 'react-native'
import React, { useEffect } from 'react'
import ScrollView = Animated.ScrollView;
import images from "@/constants/images";
import icons from "@/constants/icons";
import { useRouter } from 'expo-router';

const Onboarding = () => { 
    const router=useRouter();


    
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain"/>
                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">
                        Welcome to ReState
                    </Text>

                    <Text className={"text-3xl font-rubik-bold text-black-300 text-center mt-2"}>
                        Lets's Get You Closer to {"\n"}
                        <Text className={"text-primary-300 "}>
                            Your Ideal Home
                        </Text>
                    </Text>

                    <Text className={"text-lg font-rubik text-black-300 text-center mt-12"}>
                        Login to ReState with Google
                    </Text>

                    <TouchableOpacity className={"bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 mb-8"}
                    onPress={() => {
                        router.push("/signUp");
                    }}
                    >
                        <View className="flex flex-row items-center justify-center ">
                            <Text className={"text-lg font-rubik-medium text-black-300 ml-2"}>
                                Get started
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
export default Onboarding

