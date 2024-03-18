import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainNavigatorStackPropsList = {
  HomeScreen: undefined;
  CourseDetailsScreen: {courseId: string};
  LessonDetailsScreen: {lessonId: string; courseId: string};
};

export type MainNavigatorNavigationProps =
  NativeStackNavigationProp<MainNavigatorStackPropsList>;
export type MainNavigatorRouteProps = RouteProp<MainNavigatorStackPropsList>;
