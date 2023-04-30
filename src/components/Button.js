/* eslint-disable prettier/prettier */

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Fonts } from '../styles/typography';

const Button = ({ onPress, title }) => {

  return (
    <TouchableOpacity className="bg-black p-5 rounded-3xl justify-center items-center" onPress={onPress}>
      <Text style={{ fontFamily: Fonts.montserratSemiBold }} className="text-white text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
