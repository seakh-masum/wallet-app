/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import Chips from '../../components/Chips';
import InputBox from '../../components/InputBox';
import {cardNumber, showAlert} from '../../shared/utils';
import Header from '../../components/Header';
import ColorBox from '../../components/ColorBox';
import {
  initialFormData,
  COLORS,
  CARD_TYPE,
  CARD_NETWORK,
  FIRESTORE_PATH,
} from '../../shared/constant';
import { addFirestoreData, updateFireStoreData } from '../../services/firestore';
import { FormStyles } from '../../styles/global-style';
import Button from '../../components/Button';

const AddCardScreen = ({route, navigation}) => {
  const [title, setTitle] = useState('Add Card');
  const [id, setId] = useState('');
  const [formValue, setFormValue] = useState(initialFormData);
  const [cardType, setCardType] = useState(initialFormData.cardType);
  const [network, setNetwork] = useState(initialFormData.network);
  const [color, setColor] = useState(initialFormData.color);

  useEffect(() => {
    if (route.params) {
      const data = route.params.data;
      setFormValue(data);
      setTitle('Edit Card');
      setId(data.id);
      setColor(data.color);
      setNetwork(data.network);
      setCardType(data.cardType);
    }
  }, []);

  const handleChange = (e, name) => {
    setFormValue(state => ({...state, [name]: e}));
  };

  const onSave = () => {
    const data = {
      ...formValue,
      network,
      cardType,
      color,
    };

    if (id) {
      updateFireStoreData(FIRESTORE_PATH.card, data, id).then(() => {
          showAlert('Update Card', 'Card updated successfully', 'Ok', navigate('Cards'));
        }).catch();
    } else {
      addFirestoreData(FIRESTORE_PATH.card, data)
        .then(() => {
          showAlert('Add Card', 'Card added successfully', 'Ok', navigate('Cards'));
        })
        .catch();
    }
  };

  const navigate = (path) => {
    // navigation.navigate(path);
    navigation.reset({
      index: 0,
      routes: [{ name: path }]
    })
  };

  return (
    <View style={FormStyles.container}>
      <Header hasBackBtn title={title} />
      <ScrollView style={FormStyles.inputContainer}>
        <InputBox
          key={1}
          name="cardName"
          label="Card Name"
          onChange={e => handleChange(e, 'cardName')}
          value={formValue.cardName}
          placeholder="e.g. Amazon ICICI"
          wrapperStyle={FormStyles.inputWrapper}
        />
        <InputBox
          key={2}
          label="Card Number"
          onChange={e => handleChange(e, 'cardNo')}
          value={cardNumber(formValue.cardNo)}
          placeholder="XXXX XXXX XXXX XXXX"
          maxLength={19}
          wrapperStyle={FormStyles.inputWrapper}
        />
        <View key={3} style={FormStyles.inputWrapper}>
          <Text style={FormStyles.inputLabel}>Card Type</Text>
          <Chips
            data={CARD_TYPE}
            setValue={setCardType}
            value={cardType}
            isFilter={false}
          />
        </View>
        <InputBox
          key={4}
          label="Holder Name"
          onChange={e => handleChange(e, 'holderName')}
          value={formValue.holderName}
          placeholder="e.g. Sk Masum"
          wrapperStyle={FormStyles.inputWrapper}
        />
        <View key={5} style={FormStyles.expiryCvvWrapper}>
          <View>
            <Text style={FormStyles.inputLabel}>Expiry Date</Text>
            <View style={FormStyles.expiryDateWrapper}>
              <InputBox
                onChange={e => handleChange(e, 'expiryMonth')}
                value={formValue.expiryMonth}
                hideLabel
                maxLength={2}
                keyboardType="number-pad"
                placeholder="MM"
              />
              <Text style={FormStyles.slash}>/</Text>
              <InputBox
                onChange={e => handleChange(e, 'expiryYear')}
                value={formValue.expiryYear}
                hideLabel
                maxLength={4}
                keyboardType="number-pad"
                placeholder="YYYY"
              />
            </View>
          </View>
          <InputBox
            label="CVV"
            onChange={e => handleChange(e, 'cvv')}
            value={formValue.cvv}
            maxLength={3}
            keyboardType="number-pad"
            placeholder="XXX"
          />
        </View>
        <View key={6} style={FormStyles.inputWrapper}>
          <Text style={FormStyles.inputLabel}>Networks</Text>
          <Chips
            data={CARD_NETWORK}
            setValue={setNetwork}
            value={network}
            isFilter={false}
          />
        </View>
        <View key={7}>
          <Text style={FormStyles.inputLabel}>Color</Text>
          <ColorBox data={COLORS} setValue={setColor} value={color} />
        </View>
      </ScrollView>
      <View style={FormStyles.bottomContainer}>
        <Button onPress={onSave} title={'Save'} />
      </View>
    </View>
  );
};

export default AddCardScreen;
