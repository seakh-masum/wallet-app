/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, View, Alert, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Header from '../../components/Header';
import Chips from '../../components/Chips';
import ViewCardScreen from './ViewCardScreen';
import Card from '../../components/Card';
import { deleteFirestoreData } from '../../services/firestore';
import { FIRESTORE_PATH } from '../../shared/constant';
import { Colors } from '../../styles/colors';
import BottomSheet from '../../components/BottomSheet';

const CARD_TYPE = [
  { label: 'All', value: '' },
  { label: 'Credit', value: 'credit' },
  { label: 'Debit', value: 'debit' },
];

const CardScreen = ({ navigation }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cardType, setCardType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [filterValue, setFilterValue] = useState(['credit', 'debit']);

  useEffect(() => {
    setLoading(true);
    const subscriber = firestore()
      .collection('cards')
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setCards(users);
        setLoading(false);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  useEffect(() => {
    setLoading(true);
    firestore()
      .collection('cards')
      .where('cardType', 'in', filterValue)
      .get()
      .then(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setCards(users);
        setLoading(false);
      });
  }, [filterValue]);

  const onViewCard = data => {
    setModalData(data);
    setModalVisible(true);
  };

  const closeViewModal = () => {
    setModalVisible(!modalVisible);
  };

  const onEditCard = data => {
    closeViewModal();
    setTimeout(() => {
      navigation.navigate('AddCard', { data });
    }, 100);
  };

  const onDeleteCard = id => {
    closeViewModal();
    Alert.alert('Update Card', 'Card updated successfully', [
      {
        text: 'Cancel',
        onPress: () => console.log('first'),
        style: 'cancel',
      },
      {
        text: 'Yes, Delete',
        onPress: () => deletCard(id),
      },
    ]);
  };

  const deletCard = id => {
    deleteFirestoreData(FIRESTORE_PATH.card, id)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(err => console.log(err));
  };

  const onAddCard = () => {
    navigation.navigate('AddCard');
  }

  return (
    <View className="flex-col flex-1 mx-3 bg-neutral-100">
      <View className="py-5">
        <Header title="Cards" onAdd={onAddCard} />
        <Chips
          data={CARD_TYPE}
          setValue={setCardType}
          setFilterValue={setFilterValue}
          value={cardType}
          isFilter
        />
      </View>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <ViewCardScreen
          modalData={modalData}
          onEdit={() => onEditCard(modalData)}
          onDelete={() => onDeleteCard(modalData.id)}
        />
      </BottomSheet>
      {loading ? (
        <View className="flex-1 justify-center align-center">
          <ActivityIndicator size="large" color={Colors.pink} />
        </View>
      ) : (
        <FlatList
          data={cards}
          renderItem={({ item, index }) => (
            <Card
              key={index}
              data={item}
              index={index}
              onView={() => onViewCard(item)}
              isShowCVV={false}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default CardScreen;
