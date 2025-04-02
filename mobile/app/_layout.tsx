import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync(); // Hide the splash screen after load
    }, 500);
  }, []);

  return <Stack screenOptions={{headerShown: false}}/>;
}
