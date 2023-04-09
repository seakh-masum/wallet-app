/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../styles/colors';
import {Theme} from '../../styles/theme';
import BackspaceIcon from '../../styles/icon/BackspaceIcon';
import {shuffleArray} from '../../shared/utils';
import { Mixins } from '../../styles/mixins';

const passcodeArr = [
  {position: 1, isFilled: false, value: null},
  {position: 2, isFilled: false, value: null},
  {position: 3, isFilled: false, value: null},
  {position: 4, isFilled: false, value: null},
];

const PasscodeScreen = ({navigation}) => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'X']);
  const [passcode, setPasscode] = useState(passcodeArr);
  const [keyIndex, setKeyIndex] = useState(0);

  useEffect(() => {
    setDefaultValue();
  }, []);

  const onPressKey = item => {
    setKeyIndex(keyIndex + 1);
    let copyPasscode = passcode;
    copyPasscode[keyIndex].value = item;
    setPasscode(copyPasscode);

    if (keyIndex === 3) {
      const passcodeValue = Number(passcode.map(x => x.value).join(''));
      if (passcodeValue == 6278) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Tab'}],
        });
      } else {
        Alert.alert('Passcode', 'you have enter wrong passcode', [
          {
            text: 'Try again',
            onPress: setDefaultValue,
            style: 'cancel',
          },
        ]);
      }
    }
  };

  const setDefaultValue = () => {
    setKeyIndex(0);
    setPasscode([
      {position: 1, isFilled: false, value: null},
      {position: 2, isFilled: false, value: null},
      {position: 3, isFilled: false, value: null},
      {position: 4, isFilled: false, value: null},
    ]);
    const newArray = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    setNumbers([...newArray, 'X']);
    console.log('setDefaultValue', {keyIndex, passcode, numbers, passcodeArr});
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface,
        ...Mixins.alignJustify('center', 'flex-end'),
        padding: 20,
        gap: 40,
      },
      passcodeHeading: {
        ...Mixins.fontStyle(Colors.desc,Theme.textLg),
        textAlign: 'center',
      },
      passcodeWrapper:{
        ...Mixins.flex('row', 'center', 'center'),
        gap: 8,
      },
      passcode: {
        borderWidth: 2,
        borderColor: Colors.primary,
        width: 16,
        height: 16,
        borderRadius: 8,
      },
      numpadContainer: {
        ...Mixins.flex('row', 'center', 'flex-end'),
        flexWrap: 'wrap',
        gap: 20,
        maxHeight: 400,
        maxWidth: '80%',
        paddingRight: 16,
        alignSelf: 'center',
      },
      numpadWrapper:{
        ...Mixins.alignJustify('center', 'center'),
        backgroundColor: Colors.secondary,
        borderColor: Colors.inputBox,
        borderWidth: 1,
        borderRadius: 35,
        width: 70,
        height: 70,
      },
      numpadText:{...Mixins.fontStyle(Colors.primary,24),},
  });


  return (
    <View
      style={styles.container}>
      <Text
        style={styles.passcodeHeading}>
        Enter Passcode
      </Text>
      <View
        style={styles.passcodeWrapper}>
        {passcode.map((item, index) => (
          <View
            key={index}
            style={[styles.passcode, {
                backgroundColor:
                  item.value !== null ? Colors.primary : Colors.surface,}]} />
        ))}
      </View>
      <View
        style={styles.numpadContainer}>
        {numbers.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPressKey(item)}
            style={styles.numpadWrapper}>
            <Text style={styles.numpadText}>
              {item == 'X' ? <BackspaceIcon width={36} height={36} /> : item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PasscodeScreen;
