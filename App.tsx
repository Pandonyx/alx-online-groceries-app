import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppNavigator from './src/navigation';
import { View, ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Gilroy-Regular': require('./src/assets/fonts/Gilroy-Regular.ttf'),
          'Gilroy-Medium': require('./src/assets/fonts/Gilroy-Medium.ttf'),
          'Gilroy-SemiBold': require('./src/assets/fonts/Gilroy-SemiBold.ttf'),
          'Gilroy-Bold': require('./src/assets/fonts/Gilroy-Bold.ttf'),
          'Gilroy-Heavy': require('./src/assets/fonts/Gilroy-Heavy.ttf'),
          'Gilroy-Light': require('./src/assets/fonts/Gilroy-Light.ttf'),
          'Gilroy-Thin': require('./src/assets/fonts/Gilroy-Thin.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.warn('Error loading fonts:', error);
        setFontsLoaded(true); // Still proceed even if fonts fail to load
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#53B175' }}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
