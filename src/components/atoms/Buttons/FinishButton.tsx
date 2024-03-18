import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './Buttons.styles';

type Props = {
  handleFinishCourse: () => void;
};
const FinishButton = ({handleFinishCourse}: Props) => {
  return (
    <Pressable style={styles.finishButton} onPress={handleFinishCourse}>
      <Text style={styles.finishButtonText}>Finish</Text>
    </Pressable>
  );
};

export default FinishButton;
