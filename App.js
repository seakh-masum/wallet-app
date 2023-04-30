/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, SafeAreaView, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackScreen from './src/navigation/MainStackScreen';

const App = () => {
  const colorScheme = useColorScheme();

  const backgroundStyle = {
    // backgroundColor: colorScheme === 'dark' ? '#0c0a09' : '#f5f5f5',
    flex: 1,
  };



  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colorScheme === 'dark' ? '#0c0a09' : '#f5f5f5'}
      />
      <NavigationContainer>
        <MainStackScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
