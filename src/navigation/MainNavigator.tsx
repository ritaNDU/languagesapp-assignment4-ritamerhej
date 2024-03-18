import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorStackPropsList} from './MainNavigator.types';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LessonDetailsScreen from '../screens/LessonDetailsScreen/LessonDetailsScreen';
import CourseDetailsScreen from '../screens/CourseDetailsScreen/CourseDetailsScreen';

const Stack = createNativeStackNavigator<MainNavigatorStackPropsList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="CourseDetailsScreen"
        component={CourseDetailsScreen}
      />
      <Stack.Screen
        name="LessonDetailsScreen"
        component={LessonDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
