import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ComingSoon = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white px-4 pt-4">
      
      {/* Top Bar */}
      <View className="flex-row items-center mb-6 mt-5">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 rounded-full"
        >
          <Ionicons name='arrow-back' size={24} color="#003366"/>
        </TouchableOpacity>
      </View>

      {/* Center Content */}
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-rubik-bold text-blue-600 mb-2 text-center">
          Coming Soon!
        </Text>
        <Text className="text-base font-rubik-regular text-black-300 text-center leading-6">
          We’re working hard to bring this feature to life.
          {'\n'}Stay tuned and check back soon!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ComingSoon;
