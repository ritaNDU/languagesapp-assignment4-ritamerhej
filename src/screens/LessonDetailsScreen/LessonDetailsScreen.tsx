import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View} from 'react-native';
import {MainNavigatorStackPropsList} from '../../navigation/MainNavigator.types';
import {getCourseById, getLessonById} from '../../utils/courseDataGetter';
import {AppContextType, CourseContext} from '../../store/CourseContextProvider';
import {Course, Lesson} from '../../data/courseData.types';
import ExerciseSection from '../../components/molecules/ExerciseSection';
import ExplanationSection from '../../components/molecules/ExplanationSection';
import commonStyles from '../commonStyles';

const LessonDetailsScreen = () => {
  const {state} = useContext(CourseContext) as AppContextType;
  const {params} =
    useRoute<RouteProp<MainNavigatorStackPropsList, 'CourseDetailsScreen'>>();

  const {lessonId, courseId} = params ?? {lessonId: '', courseId: ''};

  const course = getCourseById(state.allCourses, courseId) as Course;
  const lesson = getLessonById(course.lessons, lessonId) as Lesson;

  return (
    <View style={commonStyles.container}>
      <ExplanationSection
        title={lesson.title}
        objectif={lesson.objectif}
        explanation={lesson.explanation}
      />
      <ExerciseSection
        question={lesson.exercise.question}
        option1={lesson.exercise.option1}
        option2={lesson.exercise.option2}
        lessonId={lessonId}
        courseId={courseId}
      />
    </View>
  );
};

export default LessonDetailsScreen;
