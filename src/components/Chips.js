/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Pressable, StyleSheet, FlatList} from 'react-native';
import { Colors } from '../styles/colors';

const Chips = ({data, setValue, setFilterValue, value, isFilter}) => {
  const onSelect = x => {
    setValue(x);
    if (isFilter) {
      if (x == '') {
        setFilterValue(['credit', 'debit']);
      } else {
        setFilterValue([x]);
      }
    }
  };

  const renderItem = ({item, index}) => {
    const bgColor = item.value == value ? '#000' : 'transparent';
    const color = item.value == value ? 'white' : '#000';
    return (
      <Pressable
        key={index}
        onPress={() => onSelect(item.value)}
        style={{...styles.box, backgroundColor: bgColor}}>
        <Text style={{color: color}}>{item.label}</Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.value}
    />
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  box: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginRight: 10,
  },
});

export default Chips;
