import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './Buttons.styles';

type Props = {
  handleOpenHelpModal: () => void;
};

const HelpButton = ({handleOpenHelpModal}: Props) => {
  return (
    <Pressable onPress={handleOpenHelpModal} style={styles.helpButton}>
      <Text style={styles.helpButtonText}>Help</Text>
    </Pressable>
  );
};

export default HelpButton;
