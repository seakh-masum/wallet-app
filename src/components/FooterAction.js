/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import EditIcon from '../styles/icon/EdiIcon';
import DeleteIcon from '../styles/icon/DeleteIcon';
import VisibilityOffIcon from '../styles/icon/VisibiltyOffIcon';
import VisibilityIcon from '../styles/icon/VisibilityIcon';
import {Mixins} from '../styles/mixins';
import { Colors } from '../styles/colors';

const FooterAction = ({setIsShowCVV, isShowCVV, onEdit, onDelete, hasCvv}) => {
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
    <View style={styles.actionRow}>
      {hasCvv && (
        <TouchableOpacity
          onPress={() => setIsShowCVV(!isShowCVV)}
          style={styles.actionBtn}>
          {!isShowCVV ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onEdit} style={styles.actionBtn}>
        <EditIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.actionBtn}>
        <DeleteIcon />
      </TouchableOpacity>
    </View>
  );
};

export default FooterAction;
