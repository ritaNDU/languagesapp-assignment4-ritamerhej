import {Course, Lesson} from '../data/courseData.types';

export function getCourseById(allCourses: Course[], courseId: string) {
  return allCourses.find(course => course.id === courseId);
}

export function getLessonById(lessons: Lesson[], lessonId: string) {
  return lessons.find(lesson => lesson.id === lessonId);
}
