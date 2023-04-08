/* eslint-disable prettier/prettier */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Mixins} from '../styles/mixins';
import {Colors} from '../styles/colors';
import {Fonts} from '../styles/typography';

const Button = ({onPress, title}) => {
  const styles = {
    ctaBtn: {
      backgroundColor: Colors.primary,
      padding: 20,
      borderRadius: 30,
      ...Mixins.alignJustify('center', 'center'),
    },
    ctaBtnText: {
      color: '#fff',
      fontSize: 20,
      fontFamily: Fonts.montserratSemiBold,
    },
  };

  return (
    <TouchableOpacity style={styles.ctaBtn} onPress={onPress}>
      <Text style={styles.ctaBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
