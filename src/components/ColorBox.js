/* eslint-disable prettier/prettier */
import React from 'react'
import { Pressable, StyleSheet, FlatList } from 'react-native';
import CheckCircle from '../../assets/svg/check_circle.svg';

const ColorBox = ({ data, setValue, value }) => {
   const renderItem = (({item, index})=> {
      return (
        <Pressable key={index} onPress={()=> setValue(item)} style={{...styles.box, backgroundColor: item}} >
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

const styles = StyleSheet.create({
  box: {
    borderRadius: 24,
    marginRight: 10, height: 48, width: 48,
  },
});

export default ColorBox;