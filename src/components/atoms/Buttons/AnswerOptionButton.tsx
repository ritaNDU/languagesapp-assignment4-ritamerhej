import {GestureResponderEvent, Pressable, Text} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';

type Props = {
  handleOptionChoice: (
    isAnswerCorrect: boolean,
  ) => (event: GestureResponderEvent) => void;
  option: string;
  isCorrectAnswer: boolean;
};

const AnswerOptionButton = ({
  handleOptionChoice,
  option,
  isCorrectAnswer,
}: Props) => {
  return (
    <Pressable
      style={styles.answerButton}
      onPress={handleOptionChoice(isCorrectAnswer)}
      android_ripple={{color: '#ccc'}}>
      <Text style={styles.answerButtonText}>
        {option} {isCorrectAnswer}
      </Text>
    </Pressable>
  );
};

export default AnswerOptionButton;
