/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { cardNumber, xxxCardNumber, copyToClipboard } from '../shared/utils';
import MastercardIcon from '../../assets/svg/master_card.svg';
import VisaIcon from '../../assets/svg/visa.svg';
import RupayIcon from '../../assets/svg/rupay.svg';

const Card = ({ data, index, isShowCVV, isView, onView, isDoc }) => {
  const { network } = data;

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

  const cardStyles = {
    backgroundColor: data.color, elevation: index * 2,
    shadowColor: data.color, marginTop: index == 0 ? 0 : -140, zIndex: index,
  };

  return (
    <Pressable onPress={() => pressCard()} underlayColor="white">
      <View className="flex-col justify-between p-4 rounded-3xl h-56 w-full shadow-2xl" style={cardStyles}>
        <View className="flex-row items-center justify-between">
          {/* Card Name */}
          <Text className="text-black text-xl">{isDoc ? data.docType : data.cardName}</Text>
          {!isDoc && getNetworkIcon()}
        </View>
        {/* Card Number */}
        <Pressable className="block mt-8" onLongPress={() => copyToClipboard(isDoc ? data.docNumber : data.cardNo)}>
          <Text className="text-black text-3xl">
            {isView ? cardNumber(isDoc ? data.docNumber : data.cardNo) : xxxCardNumber(isDoc ? data.docNumber : data.cardNo)}
          </Text>
        </Pressable>
        <View className="flex-row justify-between item-end mt-2">
          {/* Holder Name */}
          <View className="flex-col">
            <Text className="text-neutral-600 text-xss">Holder Name</Text>
            <Pressable onLongPress={() => copyToClipboard(isDoc ? data.docName : data.holderName)}>
              <Text className="text-black text-base">
                {isDoc ? data.docName : data.holderName}
              </Text>
            </Pressable>
          </View>
          {!isDoc &&
            <View className="flex-row items-center self-center">
              {/* Valid Thru */}
              <View className="block">
                <Text className="text-neutral-600 text-xss">Valid Thru</Text>
                <Pressable
                  onLongPress={() =>
                    copyToClipboard(`${data.expiryMonth}/${data.expiryYear}`)
                  }>
                  <Text className="text-black text-xs">
                    {data.expiryMonth}/{data.expiryYear}
                  </Text>
                </Pressable>
              </View>
              {/* CVV */}
              {isShowCVV && (
                <View className="block ml-3">
                  <Text className="text-neutral-600 text-xss">CVV</Text>
                  <Pressable onLongPress={() => copyToClipboard(data.cvv)}>
                    <Text className="text-black text-xs">{data.cvv}</Text>
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
