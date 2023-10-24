/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardScreen from '../screens/cards/CardScreen';
import DocScreen from '../screens/docs/DocScreen';
import CreditCardIcon from '../styles/icon/CreditCardIcon';
import DocIcon from '../styles/icon/DocIcon';
import { View, Text, useColorScheme } from 'react-native';
import { Colors } from '../styles/colors';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme == 'dark';

  const setTabConfig = (route, focused) => {
    if (route.name === 'Cards') {
      return (
        <View
          className={`${focused ?
            'flex-row gap-1 items-center bg-pink-100 rounded-3xl pl-3 pr-4 pt-1 pb-2 dark:bg-pink-950' : 'mb-1'
            }`}>
          <CreditCardIcon
            fill={focused ? Colors.pink : (isDarkMode ? '#fff' : '#000')}
            isFocus={focused}
            height={focused ? 24 : 32}
            width={focused ? 24 : 32}
          />
          {focused && <Text className="text-pink-500">Cards</Text>}
        </View>
      );
    } else if (route.name === 'Docs') {
      return (
        <View
          className={`${focused ?
            'flex-row gap-1 items-center bg-indigo-100 rounded-3xl pl-3 pr-4 pt-1 pb-2 dark:bg-indigo-950' : 'mb-1'
            }`}>
          <DocIcon
            fill={focused ? Colors.violet : (isDarkMode ? '#fff' : '#000')}
            isFocus={focused}
            height={focused ? 24 : 32}
            width={focused ? 24 : 32}
          />
          {focused && <Text className="text-indigo-500">Docs</Text>}
        </View>
      );
    }
  };


  const bottomTabBarStyles = {
    height: 60,
    width: '60%',
    position: 'absolute',
    bottom: 12,
    borderRadius: 28,
    left: '20%',
    paddingTop: 8,
    paddingBottom: 4,
    zIndex: 90,
    backgroundColor: isDarkMode ? '#0c0a09' : '#fff'
  };

  return (
    <Tab.Navigator
      initialRouteName="Cards"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => setTabConfig(route, focused),
        headerShown: false,
        tabBarStyle: bottomTabBarStyles,
        lazy: true,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Cards" component={CardScreen} />
      <Tab.Screen name="Docs" component={DocScreen} />
    </Tab.Navigator>
  );
}
