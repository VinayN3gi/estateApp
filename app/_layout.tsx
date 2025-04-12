import {SplashScreen, Stack} from "expo-router";
import "./global.css"
import {useFonts} from "expo-font";
import {useEffect} from "react";
import React from "react";
import { AuthProvider } from "@/context/AuthContext";
export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if(fontsLoaded)
    {
      SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    <AuthProvider>
      <Stack  screenOptions={{headerShown: false}}/>
    </AuthProvider>
    
  )
}
