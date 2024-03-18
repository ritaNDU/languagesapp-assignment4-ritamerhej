import React, {createContext, useReducer} from 'react';
import {Action, CourseState, courseReducer} from './courseReducer';
import courseData from '../data/courseData';

export type AppContextType = {
  state: CourseState;
  dispatch: React.Dispatch<Action>;
};

export const CourseContext = createContext<AppContextType | undefined>(
  undefined,
);

const CourseContextProvider = ({children}: {children: React.JSX.Element}) => {
  const [state, dispatch] = useReducer(courseReducer, {allCourses: courseData});
  return (
    <CourseContext.Provider value={{state, dispatch}}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
