import React from 'react';
import {FlatList} from 'react-native';
import {Lesson} from '../../data/courseData.types';
import LessonDetailsCard from '../molecules/LessonDetailsCard';

type Props = {
  lessonsData: Lesson[];
  courseId: string;
};

function keyExtractor(lesson: Lesson) {
  return lesson.id;
}

const CourseCardsList = ({lessonsData, courseId}: Props) => {
  function lessonRenderer(itemData: {item: Lesson}) {
    return (
      <LessonDetailsCard
        lessonId={itemData.item.id}
        courseId={courseId}
        title={itemData.item.title}
      />
    );
  }

  return (
    <FlatList
      data={lessonsData}
      keyExtractor={keyExtractor}
      renderItem={lessonRenderer}
    />
  );
};

export default CourseCardsList;
