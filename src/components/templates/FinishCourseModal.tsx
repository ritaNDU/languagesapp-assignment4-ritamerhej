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

  function goBackHome() {
    navigation.navigate('HomeScreen');
  }

  return (
    <ModalTemplate handleClose={closeModal} isVisible={visible}>
      <View style={styles.container}>
        <Text style={styles.title}>Good Job!</Text>
        <Image
          source={require('../../assets/illustrations/courseSuccess.png')}
          style={styles.image}
        />
        <Text style={styles.successMessage}>
          You have finished this course!
        </Text>
        <View style={styles.buttonContainer}>
          <GoBackButton handleGoBack={goBackHome} />
        </View>
      </View>
    </ModalTemplate>
  );
};

export default FinishLessonModal;
