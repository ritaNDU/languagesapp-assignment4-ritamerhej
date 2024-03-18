import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import CourseCardsList from '../../components/organisms/CourseCardsList';
import {AppContextType, CourseContext} from '../../store/CourseContextProvider';
import HelpButton from '../../components/atoms/Buttons/HelpButton';
import image from '../../assets/illustrations/heroImage.png';
import HelpModal from '../../components/templates/HelpModal';
import useManageModalHook from '../../hooks/useManageModal';
import {styles} from './HomeScreen.styles';

const HomeScreen = () => {
  const {state} = useContext(CourseContext) as AppContextType;
  const {closeModal, openModal, visible} = useManageModalHook();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </View>
      <Text style={styles.titleSize}>Our Courses</Text>
      <CourseCardsList coursesData={state.allCourses} />
      <View style={styles.helpButtonContainer}>
        <HelpButton handleOpenHelpModal={openModal} />
      </View>
      <HelpModal visible={visible} closeModal={closeModal} />
    </ScrollView>
  );
};

export default HomeScreen;
