/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { Colors } from './colors';
import { Mixins } from './mixins';
import { Theme } from './theme';

const FormStyles = StyleSheet.create({
  container: {position: 'relative', flex: 1, backgroundColor: Colors.surface},
  inputContainer: {flexDirection: 'column', margin: 16},
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: Colors.surface,
    padding: 10,
  },
  inputWrapper: {marginBottom: 12},
  inputLabel: {...Mixins.fontStyle(Colors.desc, Theme.textXs), marginBottom: 5},
  expiryDateWrapper: {
    ...Mixins.flexAlign('row', 'center'),
  },
  slash: {...Mixins.fontStyle(Colors.primary, 24), marginHorizontal: 8},
  expiryCvvWrapper: {
    ...Mixins.flexJustify('row', 'space-between'),
    marginBottom: 12,
  },
});

const ListStyles = StyleSheet.create({
  addBtn: {
    ...Mixins.flex('row', 'center', 'center'),
    backgroundColor: Colors.primary,
    fontSize: 20,
    paddingRight: 4,
    paddingVertical: 6,
    borderRadius: 28,
    paddingLeft: 16,
    elevation: 20,
    shadowOffset: {
      height: 8,
      width: 8,
    },
    shadowColor: '#000',
  },
  addBtnText: {marginRight: 4, color: '#fff'},
  bottomContainer: {
    position: 'absolute',
    margin: 16,
    right: -16,
    bottom: 60,
    zIndex: 100,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
    flexDirection: 'column',
    marginHorizontal: 12,
  },
  topRow: {paddingVertical: 20},
  loadingContainer: {
    flex: 1,
    ...Mixins.alignJustify('center', 'center'),
  },
});



export {FormStyles, ListStyles};
