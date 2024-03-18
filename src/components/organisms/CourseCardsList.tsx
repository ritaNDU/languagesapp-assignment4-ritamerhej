import React from 'react';
import {ImageProps, ScrollView} from 'react-native';
import CourseDetailsCard from '../molecules/CourseDetailsCard';
import {Course} from '../../data/courseData.types';

type Props = {
  coursesData: Course[];
};

const CourseCardsList = ({coursesData}: Props) => {
  function coursesRenderer() {
    return coursesData.map(course => {
      return (
        <CourseDetailsCard
          key={course.id}
          title={course.title}
          description={course.description}
          id={course.id}
          imageUrl={course.imageUrl as ImageProps}
        />
      );
    });
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {coursesRenderer()}
    </ScrollView>
  );
};

export default CourseCardsList;
