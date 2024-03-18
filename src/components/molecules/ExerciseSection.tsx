import {View, Text, Alert} from 'react-native';
import React, {useContext} from 'react';
import AnswerOptionButton from '../atoms/Buttons/AnswerOptionButton';
import {AnswerOption} from '../../data/courseData.types';
import useManageModalHook from '../../hooks/useManageModal';
import FinishLessonModal from '../templates/FinishLessonModal';
import styles from './LessonSections.styles';
import {AppContextType, CourseContext} from '../../store/CourseContextProvider';

type Props = {
  question: string;
  option1: AnswerOption;
  option2: AnswerOption;
  courseId: string;
  lessonId: string;
};

const ExerciseSection = ({
  question,
  option1,
  option2,
  courseId,
  lessonId,
}: Props) => {
  const {openModal, closeModal, visible} = useManageModalHook();
  const {dispatch} = useContext(CourseContext) as AppContextType;

  const handleAnswerChoice = (isAnswerCorrect: boolean) => () => {
    if (isAnswerCorrect) {
      dispatch({
        type: 'updateLessonStatus',
        payload: {courseId: courseId, lessonId: lessonId, isComplete: true},
      });
      openModal();
    } else {
      Alert.alert('Wrong answer! Try again!');
    }
  };

  return (
    <View>
      <Text style={styles.secondaryTitle}>Exercise</Text>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.buttonsContainer}>
        <AnswerOptionButton
          option={option1.answer}
          isCorrectAnswer={option1.isCorrect}
          handleOptionChoice={handleAnswerChoice}
        />
        <AnswerOptionButton
          option={option2.answer}
          isCorrectAnswer={option2.isCorrect}
          handleOptionChoice={handleAnswerChoice}
        />
      </View>
      <FinishLessonModal closeModal={closeModal} visible={visible} />
    </View>
  );
};

export default ExerciseSection;
