import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Preload } from '@screens/Preload';
import theme from './src/theme';

export function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <ThemeProvider theme={theme} >
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Preload" screenOptions={{
            headerShown: false,
          }} >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={Preload} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style='light' />
    </>
  );
}