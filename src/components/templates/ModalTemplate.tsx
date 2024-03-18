import {Modal, View} from 'react-native';
import React from 'react';
import CloseModalButton from '../atoms/Buttons/CloseModalButton';
import styles from './Modals.styles';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
  children: React.JSX.Element;
};

const ModalTemplate = ({isVisible, handleClose, children}: Props) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalTemplate}>
        <CloseModalButton handleClose={handleClose} />
        {children}
      </View>
    </Modal>
  );
};

export default ModalTemplate;
