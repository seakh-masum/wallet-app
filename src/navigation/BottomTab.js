/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardScreen from '../screens/cards/CardScreen';
import DocScreen from '../screens/docs/DocScreen';
import CreditCardIcon from '../styles/icon/CreditCardIcon';
import TabScreen from './TabScreen';
import DocIcon from '../styles/icon/DocIcon';
import { StyleSheet, View, Text } from 'react-native';
import FloatingAddBtn from '../components/FloatingAddBtn';
import { Colors } from '../styles/colors';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  const setTabConfig = (route, focused) => {
    if (route.name === 'Cards') {
      return (
        <View className={`${focused && 'flex-row gap-1 items-center bg-pink-100 rounded-3xl pl-3 pr-4 pt-1 pb-2 transition-all'}`}>
          <CreditCardIcon
            fill={focused ? Colors.pink : '#000'}
            isFocus={focused}
            height={focused ? 24 : 32}
            width={focused ? 24 : 32}
          />
          {focused && <Text className="text-pink-500">Cards</Text>}
        </View>
      );
    } else if (route.name === 'Docs') {
      return (
        <View className={`${focused && 'flex-row gap-1 items-center bg-indigo-100 rounded-3xl pl-3 pr-4 pt-1 pb-2'}`}>
          <DocIcon fill={focused ? Colors.violet : '#000'} isFocus={focused} height={focused ? 24 : 30}
            width={focused ? 24 : 30} />
          {focused && <Text className="text-indigo-500">Docs</Text>}
        </View>
      );
    } else if (route.name === 'Add') {
      return (
        <FloatingAddBtn />
      );
    }
  }

  return (
    <Tab.Navigator
      initialRouteName="Cards"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => setTabConfig(route, focused),
        headerShown: false,
        tabBarStyle: styles.bottomTabBar,
        lazy: true,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Cards" component={CardScreen} />
      {/* <Tab.Screen name="Add" component={TabScreen.AddDrawer} /> */}
      <Tab.Screen name="Docs" component={DocScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabBar: {
    height: 60,
    width: '60%',
    position: 'absolute',
    bottom: 12,
    borderRadius: 20,
    left: '20%',
    paddingTop: 8,
    paddingBottom: 4,
    zIndex: 90,
  },
});
