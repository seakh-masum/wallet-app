/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, useColorScheme } from 'react-native';
import Label from './Label';

const InputBox = props => {
  const colorScheme = useColorScheme();
  const {
    name,
    label,
    value,
    onChange,
    placeholder,
    keyboardType,
    hideLabel,
    wrapperStyle,
  } = props;
  return (
    <View style={wrapperStyle}>
      {!hideLabel && <Label>{label}</Label>}
      <TextInput className="p-3 text-neutral-800 text-sm bg-neutral-200 rounded-lg dark:bg-neutral-800 dark:text-white"
        onChangeText={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        placeholderTextColor={colorScheme == 'dark' ? '#fff' : "#000"}
        keyboardType={keyboardType || 'default'}
        {...props}
      />
    </View>
  );
};

export default InputBox;
