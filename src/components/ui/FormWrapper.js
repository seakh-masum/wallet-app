/* eslint-disable prettier/prettier */
import { View, ScrollView } from 'react-native';
import React from 'react';
import Header from '../Header';

const FormWrapper = ({ title, btn, children }) => {
  return (
    <View className="relative flex-1 bg-neutral-100 p-3">
      <Header isAddPage title={title} />
      <ScrollView className="flex-column">{children}</ScrollView>
      <View className="absolute bg-neutral-100 bottom-3 left-3 right-3">
        {btn}
      </View>
    </View>
  );
};

export default FormWrapper;
