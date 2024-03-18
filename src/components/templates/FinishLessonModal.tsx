import {Image, Text, View} from 'react-native';
import React from 'react';
import ModalTemplate from './ModalTemplate';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';
import GoBackButton from '../atoms/Buttons/GoBackButton';
import styles from './Modals.styles';

type Props = {
  visible: boolean;
  closeModal: () => void;
};

const FinishLessonModal = ({visible, closeModal}: Props) => {
  const navigation = useNavigation<MainNavigatorNavigationProps>();

  function goBackToCourse() {
    navigation.pop();
  }

  return (
    <ModalTemplate handleClose={closeModal} isVisible={visible}>
      <View style={styles.container}>
        <Text style={styles.title}>Congrats!</Text>
        <Image
          source={require('../../assets/illustrations/lessonSuccess.png')}
          style={styles.image}
        />
        <Text style={styles.successMessage}>You have passed this lesson!</Text>
        <View style={styles.buttonContainer}>
          <GoBackButton
            handleGoBack={goBackToCourse}
            title="Go Back to Course"
          />
        </View>
      </View>
    </ModalTemplate>
  );
};

export default FinishLessonModal;
