import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Lesson} from '../../data/courseData.types';
import LessonDetailsCard from '../molecules/LessonDetailsCard';

type Props = {
  lessonsData: Lesson[];
  courseId: string;
};

const CourseCardsList = ({lessonsData, courseId}: Props) => {
  function lessonRenderer(itemData: Lesson[]) {
    return itemData.map(lesson => {
      return (
        <LessonDetailsCard
          lessonId={lesson.id}
          courseId={courseId}
          title={lesson.title}
          key={lesson.id}
        />
      );
    });
  }

  return <View style={styles.container}>{lessonRenderer(lessonsData)}</View>;
};

export default CourseCardsList;

const styles = StyleSheet.create({
  container: {marginBottom: 10},
});
