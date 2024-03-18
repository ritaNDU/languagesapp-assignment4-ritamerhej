/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import CourseContextProvider from './store/CourseContextProvider';

function App(): React.JSX.Element {
  return (
    <CourseContextProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </CourseContextProvider>
  );
}
export default App;
