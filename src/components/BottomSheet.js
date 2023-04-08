/* eslint-disable prettier/prettier */
import React from 'react';
import {Modal, View, Pressable, StyleSheet} from 'react-native';
import CloseIcon from '../styles/icon/CloseIcon';
import { Mixins } from '../styles/mixins';
import { Colors } from '../styles/colors';

const BottomSheet = ({modalVisible, setModalVisible, children}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={ViewStyles.centeredView}>
        <View style={ViewStyles.modalView}>
          <View style={ViewStyles.header}>
            <Pressable style={ViewStyles.cancelBtn} onPress={()=> setModalVisible(!modalVisible)}>
              <CloseIcon />
            </Pressable>
          </View>
          <View style={ViewStyles.cardWrapper}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const ViewStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 22,
    backgroundColor: '#ffffffe6',
  },
  modalView: {
    backgroundColor: 'transparent',
    borderRadius: 16,
    justifyContent: 'space-between',
  },
  header: {
    ...Mixins.flex('row', 'center', 'center'),
    padding: 16,
  },
  cardWrapper: {padding: 8, elevation: 20},
  cancelBtn: {
    ...Mixins.alignJustify('center', 'center'),
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default BottomSheet;
