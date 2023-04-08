/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArrowBackIcon from '../../assets/svg/arrow_back.svg';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../styles/typography';
import { Colors } from '../styles/colors';
import { Mixins } from '../styles/mixins';

const Header = ({title, hasBackBtn}) => {
  const navigation = useNavigation();
  
  const styleSheet = StyleSheet.create({
    headerStyle: {
      ...Mixins.flexAlign('row', 'center'),
      backgroundColor: Colors.surface,
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
    title: {
      fontSize: 32,
      color: Colors.heading,
      marginLeft: !hasBackBtn ? -12 : 0,
      fontFamily: Fonts.montserratSemiBold
    },
    backBtnWrapper: {marginRight: 8},
  });

  return (
    <View style={styleSheet.headerStyle}>
      {hasBackBtn && (
        <TouchableOpacity onPress={()=> navigation.goBack()} style={styleSheet.backBtnwrapper}>
          <ArrowBackIcon />
        </TouchableOpacity>
      )}
      <Text style={styleSheet.title}>{title}</Text>
    </View>
  );
};

export default Header;
