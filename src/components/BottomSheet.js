/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, View, Pressable, useColorScheme } from 'react-native';
import CloseIcon from '../styles/icon/CloseIcon';


const BottomSheet = ({ modalVisible, setModalVisible, children }) => {
  const colorScheme = useColorScheme();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View className="flex-1 justify-end mt-6 bg-white/80 dark:bg-black/80">
        <View className="bg-transparent rounded-2xl justify-between">
          <View className="flex-row items-center justify-center p-4">
            <Pressable className="justify-center items-center w-10 h-10 rounded-3xl bg-black dark:bg-white" onPress={() => setModalVisible(!modalVisible)}>
              <CloseIcon fill={colorScheme == 'dark' ? "#000" : "#fff"} />
            </Pressable>
          </View>
          <View className="p-2">{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
