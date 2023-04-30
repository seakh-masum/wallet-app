/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import ArrowBackIcon from '../../assets/svg/arrow_back.svg';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../styles/typography';
import AddIcon from '../styles/icon/AddIcon';


const Header = ({ title, isAddPage, onAdd }) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();


  return (
    <View className="flex-row items-center justify-between bg-neutral-100 py-4 dark:bg-neutral-950">
      <View className="flex-row gap-1 items-center">
        {isAddPage && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowBackIcon fill={colorScheme == 'dark' ? "#fff" : "#000"} />
          </TouchableOpacity>
        )}
        <Text style={{
          fontFamily: Fonts.montserratSemiBold
        }} className="text-3xl text-black dark:text-white">{title}</Text>
      </View>
      {!isAddPage &&
        <TouchableOpacity style={{
          elevation: 20,
          shadowOffset: {
            height: 8,
            width: 8,
          },
          shadowColor: '#000',
        }} className="bg-black p-1 rounded-full dark:bg-white" onPress={onAdd}>
          <AddIcon fill={colorScheme == 'dark' ? "#000" : "#fff"} height={24} width={24} />
        </TouchableOpacity>
      }
    </View>
  );
};

export default Header;
