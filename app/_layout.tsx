import {SplashScreen, Stack} from "expo-router";
import "./global.css"
import {useFonts} from "expo-font";
import {useEffect} from "react";
import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import { StatusBar } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("transparent");
    NavigationBar.setVisibilityAsync("hidden");
    if(fontsLoaded)
    {
      SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    <AuthProvider>
       <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack screenOptions={{headerShown: false}}/>
    </AuthProvider>
    
  )
}
