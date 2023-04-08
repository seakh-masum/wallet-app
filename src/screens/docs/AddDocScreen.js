/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import InputBox from '../../components/InputBox';
import {showAlert} from '../../shared/utils';
import Header from '../../components/Header';
import ColorBox from '../../components/ColorBox';
import {
  INITIAL_DOC_VALUES,
  COLORS,
  FIRESTORE_PATH,
} from '../../shared/constant';
import { addFirestoreData, updateFireStoreData } from '../../services/firestore';
import { FormStyles } from '../../styles/global-style';
import Button from '../../components/Button';

const AddDocScreen = ({route, navigation}) => {
  const [title, setTitle] = useState('Add Doc');
  const [id, setId] = useState('');
  const [formValue, setFormValue] = useState(INITIAL_DOC_VALUES);
  const [color, setColor] = useState(INITIAL_DOC_VALUES.color);

  useEffect(() => {
    if (route.params) {
      const data = route.params.data;
      setFormValue(data);
      setTitle('Edit Doc');
      setId(data.id);
      setColor(data.color);
    }
  }, []);

  const handleChange = (e, name) => {
    setFormValue(state => ({...state, [name]: e}));
  };

  const onSave = () => {
    const data = {
      ...formValue,
      color,
    };

    if (id) {
      updateFireStoreData(FIRESTORE_PATH.doc, data, id).then(() => {
        showAlert('Update Card', 'Card updated successfully', 'Ok', navigate('Docs'));
      }).catch();
    } else {
      addFirestoreData(FIRESTORE_PATH.doc, data)
        .then(() => {
          showAlert('Add Card', 'Card added successfully', 'Ok', navigate('Docs'));
        })
        .catch();
    }
  };
1
  const navigate = (path) => {
    navigation.navigate(path);
  };

  return (
    <View style={FormStyles.container}>
      <Header hasBackBtn title={title} />
      <ScrollView style={FormStyles.inputContainer}>
        <InputBox
          key={1}
          name="docType"
          label="Document Type"
          onChange={e => handleChange(e, 'docType')}
          value={formValue.docType}
          placeholder="e.g. Amazon ICICI"
          wrapperStyle={FormStyles.inputWrapper}
        />
        <InputBox
          key={2}
          name="docNumber"
          label="Document Number"
          onChange={e => handleChange(e, 'docNumber')}
          value={formValue.docNumber}
          placeholder="XXXX XXXX XXXX XXXX"
          wrapperStyle={FormStyles.inputWrapper}
        />
        <InputBox
          key={3}
          name="docName"
          label="Name on the Document"
          onChange={e => handleChange(e, 'docName')}
          value={formValue.docName}
          placeholder="XXXX XXXX XXXX XXXX"
          wrapperStyle={FormStyles.inputWrapper}
        />
        <View key={4}>
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

export default AddDocScreen;
