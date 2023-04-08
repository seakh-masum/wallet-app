/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CardScreen from '../screens/cards/CardScreen';
import DocScreen from '../screens/docs/DocScreen';
import CreditCardIcon from '../styles/icon/CreditCardIcon';
import TabScreen from './TabScreen';
import DocIcon from '../styles/icon/DocIcon';
import {StyleSheet} from 'react-native';
import FloatingAddBtn from '../components/FloatingAddBtn';
import { Colors } from '../styles/colors';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  const setTabConfig = (route, focused) => {
    if (route.name === 'Cards') {
      return (
        <CreditCardIcon
          fill={focused ? Colors.pink : '#d5d5d5'}
          isFocus={focused}
          height={36}
          width={36}
        />
      );
    } else if (route.name === 'Docs') {
      return (
        <DocIcon fill={focused ? Colors.violet : '#d5d5d5'} isFocus={focused} height={36} width={36} />
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
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => setTabConfig(route, focused),
        headerShown: false,
        tabBarStyle: styles.bottomTabBar,
        lazy: true,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Cards" component={CardScreen} />
      <Tab.Screen name="Add" component={TabScreen.AddDrawer} />
      <Tab.Screen name="Docs" component={DocScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabBar: {
    height: 75,
    width: '60%',
    position: 'absolute',
    bottom: 12,
    borderRadius: 20,
    left: '20%',
    paddingTop: 4,
    paddingBottom: 8,
    zIndex: 90,
  },
});
