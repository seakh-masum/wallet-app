/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Pressable, FlatList, useColorScheme } from 'react-native';


const Chips = ({ data, setValue, setFilterValue, value, isFilter }) => {
  const colorScheme = useColorScheme();
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

  const renderItem = ({ item, index }) => {
    const bgColor = item.value == value ? (colorScheme == 'dark' ? '#fff' : '#000') : 'transparent';
    const color = item.value == value ? (colorScheme == 'dark' ? '#000' : '#fff') : (colorScheme == 'dark' ? '#fff' : '#000');
    return (
      <Pressable
        key={index}
        onPress={() => onSelect(item.value)}
        style={{ backgroundColor: bgColor }} className="px-4 py-1 rounded-2xl border border-black mr-3 dark:border-white">
        <Text style={{ color: color }}>{item.label}</Text>
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
export default Chips;
