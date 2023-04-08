import firestore from '@react-native-firebase/firestore';


const updateFireStoreData = (path, data, id) => {
  return firestore().collection(path).doc(id).update(data);
};

const addFirestoreData = (path, data) => {
  return firestore().collection(path).add(data);
};

const deleteFirestoreData = (path, id) => {
    return firestore()
    .collection(path)
    .doc(id)
    .delete();
}

export {addFirestoreData, updateFireStoreData, deleteFirestoreData};