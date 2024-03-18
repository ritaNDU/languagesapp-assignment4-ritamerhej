import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';

type Props = {
  handleGoBack: () => void;
  title?: string;
};
const GoBackHomeButton = ({handleGoBack, title}: Props) => {
  return (
    <Pressable onPress={handleGoBack} style={styles.finishButton}>
      <Text style={styles.finishButtonText}>
        {title ? title : 'Go Back Home'}
      </Text>
    </Pressable>
  );
};

export default GoBackHomeButton;
