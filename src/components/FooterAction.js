/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, View, useColorScheme } from 'react-native';
import EditIcon from '../styles/icon/EdiIcon';
import DeleteIcon from '../styles/icon/DeleteIcon';
import VisibilityOffIcon from '../styles/icon/VisibiltyOffIcon';
import VisibilityIcon from '../styles/icon/VisibilityIcon';
import { Mixins } from '../styles/mixins';
import { Colors } from '../styles/colors';

const FooterAction = ({ setIsShowCVV, isShowCVV, onEdit, onDelete, hasCvv }) => {
  const colorScheme = useColorScheme();
  const styles = {
    actionBtn: {
      alignItems: 'center',
      padding: 8,
      borderRadius: 20,
    },
    actionRow: {
      ...Mixins.flexJustify('row', 'space-around'),
      padding: 12,
      backgroundColor: Colors.secondary,
    },
  };
  return (
    <View className="flex-row justify-around bg-white p-3 dark:bg-neutral-950">
      {hasCvv && (
        <TouchableOpacity
          onPress={() => setIsShowCVV(!isShowCVV)}
          className="items-center p-2 rounded-2xl">
          {!isShowCVV ? <VisibilityIcon fill={colorScheme == 'dark' ? '#fff' : '#000'} /> : <VisibilityOffIcon fill={colorScheme == 'dark' ? '#fff' : '#000'} />}
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onEdit} className="items-center p-2 rounded-2xl">
        <EditIcon fill={colorScheme == 'dark' ? '#fff' : '#000'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} className="items-center p-2 rounded-2xl">
        <DeleteIcon fill={colorScheme == 'dark' ? '#fff' : '#000'} />
      </TouchableOpacity>
    </View>
  );
};

export default FooterAction;
