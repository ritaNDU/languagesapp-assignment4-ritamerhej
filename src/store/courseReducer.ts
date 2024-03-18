import {Course} from '../data/courseData.types';
import {getCourseById} from '../utils/courseDataGetter';

export type CourseState = {
  allCourses: Course[];
};

export type Action =
  | {
      type: 'updateCourseStatus';
      payload: {courseId: string; isComplete: boolean};
    }
  | {
      type: 'updateLessonStatus';
      payload: {courseId: string; lessonId: string; isComplete: boolean};
    };

export function courseReducer(state: CourseState, action: Action) {
  const {type} = action;

  //TODO: To clean

  switch (type) {
    case 'updateCourseStatus': {
      let allCoursesCopy = state.allCourses;

      const course = getCourseById(
        allCoursesCopy,
        action.payload.courseId,
      ) as Course;
      course.isComplete = action.payload.isComplete;

      allCoursesCopy = allCoursesCopy.map(currentCourse => {
        if (currentCourse.id === action.payload.courseId) {
          return course;
        } else {
          return currentCourse;
        }
      });
      return {...state, allCourses: allCoursesCopy};
    }

    case 'updateLessonStatus': {
      const allCourses = state.allCourses;

      const currentCourse = getCourseById(
        allCourses,
        action.payload.courseId,
      ) as Course;

      const allLessons = currentCourse.lessons;
      const updatedLessons = allLessons.map(lesson => {
        if (lesson.id === action.payload.lessonId) {
          return {...lesson, isComplete: !lesson.isComplete};
        } else {
          return lesson;
        }
      });

      const updatedCourse = {...currentCourse, lessons: updatedLessons};
      const updatedAllCourses = allCourses.map(course => {
        if (course.id === action.payload.courseId) {
          return updatedCourse;
        } else {
          return course;
        }
      });

      return {...state, allCourses: updatedAllCourses};
    }

    default:
      return state;
  }
}
