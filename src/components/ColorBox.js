/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, FlatList } from 'react-native';
import CheckCircle from '../../assets/svg/check_circle.svg';

const ColorBox = ({ data, setValue, value }) => {
  const renderItem = (({ item, index }) => {
    return (
      <Pressable key={index} onPress={() => setValue(item)} className="rounded-3xl h-12 w-12 mr-3" style={{ backgroundColor: item }} >
        {item === value && <CheckCircle />}
      </Pressable>
    );
  });


  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item}
    />
  );

};

export default ColorBox;