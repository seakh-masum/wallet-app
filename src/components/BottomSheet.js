/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, View, Pressable } from 'react-native';
import CloseIcon from '../styles/icon/CloseIcon';
import { Colors } from '../styles/colors';

const BottomSheet = ({ modalVisible, setModalVisible, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View className="flex-1 justify-end mt-6 bg-white/80">
        <View className="bg-transparent rounded-2xl justify-between">
          <View className="flex-row items-center justify-center p-4">
            <Pressable style={{
              backgroundColor: Colors.primary,
            }} className="justify-center items-center w-10 h-10 rounded-3xl" onPress={() => setModalVisible(!modalVisible)}>
              <CloseIcon />
            </Pressable>
          </View>
          <View className="p-2">{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
