/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import EditIcon from '../styles/icon/EdiIcon';
import DeleteIcon from '../styles/icon/DeleteIcon';
import VisibilityOffIcon from '../styles/icon/VisibiltyOffIcon';
import VisibilityIcon from '../styles/icon/VisibilityIcon';
import { Mixins } from '../styles/mixins';
import { Colors } from '../styles/colors';

const FooterAction = ({ setIsShowCVV, isShowCVV, onEdit, onDelete, hasCvv }) => {
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
    <View className="flex-row justify-around bg-white p-3">
      {hasCvv && (
        <TouchableOpacity
          onPress={() => setIsShowCVV(!isShowCVV)}
          className="items-center p-2 rounded-2xl">
          {!isShowCVV ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onEdit} className="items-center p-2 rounded-2xl">
        <EditIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} className="items-center p-2 rounded-2xl">
        <DeleteIcon />
      </TouchableOpacity>
    </View>
  );
};

export default FooterAction;
