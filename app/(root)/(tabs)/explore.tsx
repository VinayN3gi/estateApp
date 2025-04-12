import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Explore = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView contentContainerStyle={{flexGrow:1}} className='px-6 py-12'>
                <Text>
                    Explore
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Explore
const styles = StyleSheet.create({})
