import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import theme from './src/theme';
import { Routes } from './src/routes';

export function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <Routes />
      </ThemeProvider>
      <StatusBar style='light' />
    </>
  );
}