import {View, Text, Image, Pressable, ImageProps} from 'react-native';
import React from 'react';
import styles from './Cards.styles';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';

type Props = {
  title: string;
  description: string;
  id: string;
  imageUrl: ImageProps;
};

const CourseDetailsCard = ({title, description, id, imageUrl}: Props) => {
  const navigation = useNavigation<MainNavigatorNavigationProps>();

  const handleGoToCourse = (courseId: string) => () => {
    navigation.navigate('CourseDetailsScreen', {courseId: courseId});
  };
  return (
    <Pressable
      style={styles.courseCardContainer}
      onPress={handleGoToCourse(id)}
      android_ripple={{color: '#ccc'}}>
      <View style={styles.imageContainer}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <Text style={styles.cardTitles}>{title}</Text>
      <Text>{description}</Text>
    </Pressable>
  );
};

export default CourseDetailsCard;
