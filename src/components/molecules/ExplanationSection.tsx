import {View, Text} from 'react-native';
import React from 'react';
import styles from './LessonSections.styles';

type Props = {
  title: string;
  objectif: string;
  explanation: string;
};

const ExplanationSection = ({title, objectif, explanation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{title}</Text>
      <View style={styles.objectifContainer}>
        <Text style={styles.secondaryTitle}>
          After this lesson you will be able to:
        </Text>
        <Text>{objectif}</Text>
      </View>
      <Text style={styles.secondaryTitle}>Let's get to it then:</Text>
      <Text>{explanation}</Text>
    </View>
  );
};

export default ExplanationSection;
