import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView contentContainerStyle={{flexGrow:1}} className='px-6 py-12'>
                <Text>
                    Profile
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profile
const styles = StyleSheet.create({})
