/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import AddCardScreen from '../screens/cards/AddCardScreen';
import AddDocScreen from '../screens/docs/AddDocScreen';
import PasscodeScreen from '../screens/passcode/PasscodeScreen';
// import HomeScreen from '../screens/HomeScreen';
// import AddCardScreen from '../screens/AddCardScreen';

const main = createNativeStackNavigator();

const MainStackScreen = props => {
  return (
    <main.Navigator
      initialRouteName="Passcode"
      screenOptions={{
        headerShown: false,
      }}>
      <main.Screen name="Tab" component={BottomTab} />
      <main.Screen name="AddCard" component={AddCardScreen} />
      <main.Screen name="AddDoc" component={AddDocScreen} />
      <main.Screen name="Passcode" component={PasscodeScreen} />
    </main.Navigator>
  );
};

export default MainStackScreen;
