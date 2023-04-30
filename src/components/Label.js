/* eslint-disable prettier/prettier */
import { Text } from 'react-native';
import React from 'react';

export default function Label(props) {
  return (
    <Text className="text-neutral-600 text-xs mb-1">{props.children}</Text>
  );
}
