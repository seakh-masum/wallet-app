/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackScreen from './src/navigation/MainStackScreen';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#f5f5f5',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#f5f5f5" />
      <NavigationContainer>
        <MainStackScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
