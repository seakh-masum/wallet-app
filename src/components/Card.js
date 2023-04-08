/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {cardNumber, xxxCardNumber, copyToClipboard} from '../shared/utils';
import MastercardIcon from '../../assets/svg/master_card.svg';
import VisaIcon from '../../assets/svg/visa.svg';
import RupayIcon from '../../assets/svg/rupay.svg';
import { Fonts } from '../styles/typography';
import { Mixins } from '../styles/mixins';
import { Colors } from '../styles/colors';
import { Theme } from '../styles/theme';

const Card = ({data, index, isShowCVV, isView, onView, isDoc}) => {
  const {network} = data;

  const getNetworkIcon = () => {
    switch (network) {
      case 'visa':
        return <VisaIcon />;

      case 'master_card':
        return <MastercardIcon />;

      case 'rupay':
        return <RupayIcon />;

      default:
        return '';
    }
  };

  const pressCard = () => {
    if (!isView) {
      onView();
    }
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      ...Mixins.flexJustify('column', 'space-between'),
      padding: 16,
      borderRadius: 20,
      height: 220,
      width: '100%',
      backgroundColor: data.color,
      marginTop: index == 0 ? 0 : -140,
      zIndex: index,
      elevation: index * 2,
      shadowColor: data.color,
    },
    topRow: {
      ...Mixins.flex('row', 'center', 'space-between'),
    },
    cardName: {...Mixins.fontStyle(Colors.primary, Theme.textLg)},
    cardNumberWrapper: {
      flexDirection: 'column',
      marginTop: 30,
    },
    cardNumber: {...Mixins.fontStyle(Colors.primary, 28), letterSpacing: 0.5 , fontFamily: Fonts.alkatraBold},
    bottomRow: {
      ...Mixins.flex('row', 'flex-end', 'space-between'),
      marginTop: 10,
    },
    label: {...Mixins.fontStyle(Colors.desc, 9)},
    holderName: {...Mixins.fontStyle(Colors.primary, Theme.textMd)},
    bottomLeftWrapper: {
      ...Mixins.flexAlign('row', 'center'),
      marginTop: 20,
      alignSelf: 'center',
    },
    textWrapper: {flexDirection: 'column'},
    cvv: {...Mixins.fontStyle(Colors.primary, Theme.textXs)},
  });

  return (
    <Pressable onPress={() => pressCard()} underlayColor="white">
      <View style={[styles.wrapper]}>
        <View style={styles.topRow}>
          {/* Card Name */}
          <Text style={styles.cardName}>{isDoc ? data.docType : data.cardName}</Text>
          {!isDoc && getNetworkIcon()}
        </View>
          {/* Card Number */}
        <Pressable style={styles.cardNumberWrapper} onLongPress={() => copyToClipboard(isDoc ? data.docNumber : data.cardNo)}>
          <Text style={styles.cardNumber}>
            {isView ? cardNumber(isDoc ? data.docNumber : data.cardNo) : xxxCardNumber(isDoc ? data.docNumber : data.cardNo)}
          </Text>
        </Pressable>
        <View style={styles.bottomRow}>
          {/* Holder Name */}
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Holder Name</Text>
            <Pressable onLongPress={() => copyToClipboard(isDoc ? data.docName : data.holderName)}>
              <Text style={styles.holderName}>
                {isDoc ? data.docName : data.holderName}
              </Text>
            </Pressable>
          </View>
          {!isDoc && 
            <View style={styles.bottomLeftWrapper}>
              {/* Valid Thru */}
              <View style={styles.textWrapper}>
                <Text style={styles.label}>Valid Thru</Text>
                <Pressable
                  onLongPress={() =>
                    copyToClipboard(`${data.expiryMonth}/${data.expiryYear}`)
                  }>
                  <Text style={styles.cvv}>
                    {data.expiryMonth}/{data.expiryYear}
                  </Text>
                </Pressable>
              </View>
              {/* CVV */}
              {isShowCVV && (
                <View style={[styles.textWrapper, {marginLeft: 8}]}>
                  <Text style={styles.label}>CVV</Text>
                  <Pressable onLongPress={() => copyToClipboard(data.cvv)}>
                    <Text style={styles.cvv}>{data.cvv}</Text>
                  </Pressable>
                </View>
              )}
            </View>
          }
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
