import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import theme from '../../../styles/theme';

const commonButtonLayoutStyles: ViewStyle = {
  flex: 1,
  alignSelf: 'center',
  padding: 5,
  borderRadius: 15,
  backgroundColor: theme.colors.primary,
};

const commonFontStyles: TextStyle = {
  fontSize: 20,
  color: theme.colors.textSecondaryColor,
  fontWeight: '400',
  textAlign: 'center',
};

const styles = StyleSheet.create({
  helpButton: {
    ...commonButtonLayoutStyles,
    alignSelf: 'center',
  },

  helpButtonText: {
    ...commonFontStyles,
  },

  answerButton: {
    ...commonButtonLayoutStyles,
  },
  answerButtonText: {
    ...commonFontStyles,
    fontSize: 14,
  },

  finishButton: {
    ...commonButtonLayoutStyles,
    justifyContent: 'flex-end',
  },
  finishButtonText: {
    ...commonFontStyles,
  },

  closeModalButtonText: {
    fontSize: 20,
  },
});

export default styles;
