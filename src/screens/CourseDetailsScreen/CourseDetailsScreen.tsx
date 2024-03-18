import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {MainNavigatorStackPropsList} from '../../navigation/MainNavigator.types';
import {getCourseById} from '../../utils/courseDataGetter';
import {AppContextType, CourseContext} from '../../store/CourseContextProvider';
import {Course} from '../../data/courseData.types';
import LessonCardsList from '../../components/organisms/LessonCardsList';
import {Image, Text, View} from 'react-native';
import {styles} from './CourseDetailsScreen.styles';
import FinishButton from '../../components/atoms/Buttons/FinishButton';
import FinishCourseModal from '../../components/templates/FinishCourseModal';
import useManageModalHook from '../../hooks/useManageModal';
import commonStyles from '../commonStyles';

const CourseDetailsScreen = () => {
  const {state, dispatch} = useContext(CourseContext) as AppContextType;
  const [courseComplete, setCourseComplete] = useState<boolean>(false);
  const {openModal, closeModal, visible} = useManageModalHook();

  const {params} =
    useRoute<RouteProp<MainNavigatorStackPropsList, 'HomeScreen'>>();
  const {courseId} = params ?? {courseId: ''};

  const course = getCourseById(state.allCourses, courseId) as Course;
  const lessons = course.lessons;

  useEffect(() => {
    let allLessonsComplete = true;
    for (let lesson of lessons) {
      if (!lesson.isComplete) {
        allLessonsComplete = false;
        break;
      }
      setCourseComplete(() => allLessonsComplete);
    }
  }, [lessons]);

  function finishCourse() {
    dispatch({
      type: 'updateCourseStatus',
      payload: {courseId: course.id, isComplete: true},
    });
    openModal();
  }

  return (
    <View style={commonStyles.container}>
      <Image style={styles.image} source={course.imageUrl} resizeMode="cover" />
      <Text style={styles.title}>Description</Text>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.title}>Lessons</Text>
      <LessonCardsList lessonsData={lessons} courseId={course.id} />
      {courseComplete && (
        <View style={styles.finishButtonContainer}>
          <FinishButton handleFinishCourse={finishCourse} />
        </View>
      )}
      <FinishCourseModal closeModal={closeModal} visible={visible} />
    </View>
  );
};

export default CourseDetailsScreen;
