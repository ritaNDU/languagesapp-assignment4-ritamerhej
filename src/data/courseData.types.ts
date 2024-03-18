import {ImageProps} from 'react-native';

export type AnswerOption = {
  answer: string;
  isCorrect: boolean;
};

export type Exercise = {
  question: string;
  option1: AnswerOption;
  option2: AnswerOption;
};

export type Lesson = {
  id: string;
  title: string;
  isComplete: boolean;
  objectif: string;
  explanation: string;
  exercise: Exercise;
};

export type Course = {
  id: string;
  title: string;
  isComplete: boolean;
  description: string;
  lessons: Lesson[];
  imageUrl?: ImageProps;
};
