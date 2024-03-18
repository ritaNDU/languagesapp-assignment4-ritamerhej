import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';

import lessonLogo from '../../assets/icons/notebook-line-icon.png';
import styles from './Cards.styles';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';

type Props = {
  title: string;
  lessonId: string;
  courseId: string;
};

const LessonDetailsCard = ({title, lessonId, courseId}: Props) => {
  const navigation = useNavigation<MainNavigatorNavigationProps>();

  const handleClickOnLesson = (id: string) => () => {
    navigation.navigate('LessonDetailsScreen', {
      lessonId: id,
      courseId: courseId,
    });
  };
  return (
    <Pressable
      style={styles.lessonCardContainer}
      onPress={handleClickOnLesson(lessonId)}
      android_ripple={{color: '#ccc'}}>
      <View style={styles.logoContainer}>
        <Image source={lessonLogo} style={styles.logo} resizeMode="contain" />
      </View>
      <Text style={styles.cardTitles}>{title}</Text>
    </Pressable>
  );
};

export default LessonDetailsCard;
