import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCardScreen from '../screens/cards/AddCardScreen';
import DocScreen from '../screens/docs/DocScreen';
import AddDocScreen from '../screens/docs/AddDocScreen';
import CardScreen from '../screens/cards/CardScreen';

const card = createNativeStackNavigator();
const doc = createNativeStackNavigator();

const TabScreen = {
  CardDrawer: () => {
    return (
      <card.Navigator
        initialRouteName="Card"
        screenOptions={{
          headerShown: false,
        }}>
        <card.Screen name="Card" component={CardScreen} />
        <card.Screen name="AddCard" component={AddCardScreen} />
      </card.Navigator>
    );
  },
  DocDrawer: () => {
    return (
      <doc.Navigator
        initialRouteName="Doc"
        screenOptions={{
          headerShown: false,
        }}>
        <doc.Screen name="Doc" component={DocScreen} />
        <doc.Screen name="AddDoc" component={AddDocScreen} />
      </doc.Navigator>
    );
  },
};

export default TabScreen;