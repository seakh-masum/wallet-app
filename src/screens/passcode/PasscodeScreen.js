/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../styles/colors';
import BackspaceIcon from '../../styles/icon/BackspaceIcon';
import { shuffleArray } from '../../shared/utils';
import LoginIcon from '../../styles/icon/LoginIcon';

const passcodeArr = [
  { position: 1, isFilled: false, value: null },
  { position: 2, isFilled: false, value: null },
  { position: 3, isFilled: false, value: null },
  { position: 4, isFilled: false, value: null },
];

const PasscodeScreen = ({ navigation }) => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'ok', 'X']);
  const [passcode, setPasscode] = useState(passcodeArr);
  const [keyIndex, setKeyIndex] = useState(0);

  useEffect(() => {
    setDefaultValue();
  }, []);

  const onPressKey = item => {
    setKeyIndex(keyIndex + 1);
    let copyPasscode = passcode;
    if (item == 'X') {
      copyPasscode[keyIndex - 1].value = null;
      setKeyIndex(keyIndex - 1);
    } else {
      copyPasscode[keyIndex].value = item;
    }

    setPasscode(copyPasscode);

    const isAllValueFilled = copyPasscode.every(x => x.value !== null);

    if (isAllValueFilled) {
      const passcodeValue = Number(passcode.map(x => x.value).join(''));
      if (passcodeValue == 6278) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Tab' }],
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
      { position: 1, isFilled: false, value: null },
      { position: 2, isFilled: false, value: null },
      { position: 3, isFilled: false, value: null },
      { position: 4, isFilled: false, value: null },
    ]);
    const newArray = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    setNumbers([...newArray, 'X']);
    console.log('setDefaultValue', { keyIndex, passcode, numbers, passcodeArr });
  };


  return (
    <View className="bg-neutral-100 flex-col items-center justify-end h-full">
      <View className="flex-col justify-center items-center min-w-[100vw]">
        <Text className="text-neutral-600 text-lg text-center mb-5">
          Enter Passcode
        </Text>
        <View className="flex-row items-center justify-center gap-2 mb-16">
          {passcode.map((item, index) => (
            <View
              key={index}
              style={[{
                backgroundColor:
                  item.value !== null ? Colors.primary : Colors.surface,
              }]} className="border-2 border-black w-4 h-4 rounded-lg" />
          ))}
        </View>
        <View className="flex-row items-center justify-center flex-wrap gap-5 flex-auto max-h-96 max-w-[80vw]">
          {numbers.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPressKey(item)}
              className="items-center justify-center bg-neutral-50 border-neutral-200 border rounded-3xl w-16 h-16">
              <Text className="text-black text-2xl">
                {item == 'X' ? <BackspaceIcon width={36} height={36} /> : (item == 'ok' ? <LoginIcon width={32} height={32} /> : item)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default PasscodeScreen;
