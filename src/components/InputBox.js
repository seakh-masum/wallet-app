/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Colors } from '../styles/colors';
import { Theme } from '../styles/theme';
import { Mixins } from '../styles/mixins';

const InputBox = props => {
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
      {!hideLabel && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        placeholderTextColor="#000"
        keyboardType={keyboardType || 'default'}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 12,
    ...Mixins.fontStyle(Colors.text, Theme.textSm),
    backgroundColor: Colors.inputBox,
    borderRadius: Theme.roundedLg,
  },
  label: { ...Mixins.fontStyle(Colors.desc, Theme.textXs), marginBottom: 5},
});

export default InputBox;
