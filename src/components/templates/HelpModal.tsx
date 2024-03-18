import {Text, View} from 'react-native';
import React from 'react';
import ModalTemplate from './ModalTemplate';
import styles from './Modals.styles';

type Props = {
  closeModal: () => void;
  visible: boolean;
};
const HelpModal = ({visible, closeModal}: Props) => {
  return (
    <ModalTemplate handleClose={closeModal} isVisible={visible}>
      <View style={styles.helpModalContainer}>
        <Text style={styles.helpTitle}>Help</Text>
        <Text style={styles.secondaryTitle}> How to use LingoPrunto?</Text>
        <View style={styles.instructions}>
          <Text style={styles.helpInstruction}>
            1. Choose a course you like.
          </Text>
          <Text style={styles.helpInstruction}>2. Learn all the lessons.</Text>
          <Text style={styles.helpInstruction}>
            3. Pass the exercise at the end of each lesson.
          </Text>
          <Text style={styles.helpInstruction}>
            4. Click on the finish button to finish the course.
          </Text>
          <Text style={styles.helpInstruction}>
            5. Restart and keep on learning.
          </Text>
        </View>
      </View>
    </ModalTemplate>
  );
};

export default HelpModal;
