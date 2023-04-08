/* eslint-disable prettier/prettier */
import {Alert} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const showAlert = (title, message, btnText, onPress) => {
  Alert.alert(title, message, [
    {
      text: btnText,
      onPress: onPress,
      style: 'cancel',
    },
  ]);
};

const makeExpiryDate = date => {
  if (date) {
    const [year, month] = date.split('-');
    return `${month}/${year.slice(-2)}`;
  }
};

const cardNumber = value => {
  return value
    ?.replace(/[^\dA-Z]/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
};

const xxxCardNumber = value => {
  const lastFourChars = value.substr(value.length - 4);
  const xChars = Array(13).join('X');

  return cardNumber(xChars + lastFourChars);
};

const copyToClipboard = text => {
  Clipboard.setString(text);
};

const transformTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export {makeExpiryDate, cardNumber, xxxCardNumber, showAlert, copyToClipboard, transformTitleCase};
