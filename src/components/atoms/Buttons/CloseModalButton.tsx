import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';

type Props = {
  handleClose: () => void;
};
const CloseModalButton = ({handleClose}: Props) => {
  return (
    <Pressable onPress={handleClose}>
      <Text style={styles.closeModalButtonText}>X</Text>
    </Pressable>
  );
};

export default CloseModalButton;
