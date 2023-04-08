/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Modal, TouchableOpacity, View} from 'react-native';
import AddCardIcon from '../styles/icon/AddCardIcon';
import PostAddIcon from '../styles/icon/PostAddIcon';
import CloseIcon from '../../assets/svg/close.svg';
import AddIcon from '../styles/icon/AddIcon';

import {useNavigation} from '@react-navigation/native';
import {Colors} from '../styles/colors';
import { Mixins } from '../styles/mixins';

const FloatingAddBtn = () => {
  const navigation = useNavigation();
  const [popup, setPopup] = React.useState(false);
  return (
    <View>
      <TouchableOpacity style={styles.addBtn} onPress={() => setPopup(true)}>
        <AddIcon fill="#fff" height={30} width={30} />
      </TouchableOpacity>
      <Modal transparent={true} visible={popup}>
        <View style={styles.container}>
          <View style={styles.boxContainer}>
            <View style={styles.iconRow}>
              <TouchableOpacity
                style={[
                  styles.iconWrapper,
                  {
                    backgroundColor: Colors.pink,
                  },
                ]}
                onPress={() => navigation.navigate('AddCard')}>
                <AddCardIcon fill={'white'} height={36} width={36} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.iconWrapper,
                  {
                    backgroundColor: Colors.violet,
                  },
                ]}
                onPress={() => navigation.navigate('AddDoc')}>
                <PostAddIcon fill={'white'} height={36} width={36} />
              </TouchableOpacity>
            </View>
            <View style={styles.cancelBtnWrapper}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setPopup(false)}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Mixins.alignJustify('center', 'flex-end'),
  },
  boxContainer: {
    ...Mixins.flex('column', 'center', 'space-between'),
    width: '70%',
    height: 180,
    borderRadius: 20,
    position: 'absolute',
    bottom: 12,
    padding: 20,
  },
  iconRow: {
    ...Mixins.flex('row', 'center', 'space-between'),
    width: '70%',
  },
  iconWrapper: {
    ...Mixins.alignJustify('center', 'center'),
    backgroundColor: Colors.pink,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cancelBtnWrapper: {...Mixins.alignJustify('center', 'flex-end')},
  addBtn: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 28,
    elevation: 20,
    shadowOffset: {
      height: 8,
      width: 8,
    },
    shadowColor: '#000',
  },
  cancelBtn: {
    ...Mixins.alignJustify('center', 'center'),
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
export default FloatingAddBtn;
