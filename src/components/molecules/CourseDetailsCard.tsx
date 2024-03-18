import {Text, Image, Pressable, ImageProps} from 'react-native';
import React from 'react';
import styles from './Cards.styles';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';

type Props = {
  title: string;
  id: string;
  imageUrl: ImageProps;
};

const CourseDetailsCard = ({title, id, imageUrl}: Props) => {
  const navigation = useNavigation<MainNavigatorNavigationProps>();

  const handleGoToCourse = (courseId: string) => () => {
    navigation.navigate('CourseDetailsScreen', {courseId: courseId});
  };
  return (
    <Pressable
      style={styles.courseCardContainer}
      onPress={handleGoToCourse(id)}
      android_ripple={{color: '#ccc'}}>
      <Image source={imageUrl} style={styles.image} resizeMode="cover" />
      <Text style={styles.cardTitles}>{title}</Text>
    </Pressable>
  );
};

export default CourseDetailsCard;
