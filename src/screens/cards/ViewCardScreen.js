/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Card from '../../components/Card';
import FooterAction from '../../components/FooterAction';

const ViewCardScreen = ({modalData, onEdit, onDelete}) => {
  const [isShowCVV, setIsShowCVV] = useState(false);
  return (
    <>
      <Card data={modalData} isShowCVV={isShowCVV} index={0} isView />
      <FooterAction hasCvv isShowCVV={isShowCVV} setIsShowCVV={setIsShowCVV} onDelete={onDelete} onEdit={onEdit} />
    </>
  );
};

export default ViewCardScreen;
