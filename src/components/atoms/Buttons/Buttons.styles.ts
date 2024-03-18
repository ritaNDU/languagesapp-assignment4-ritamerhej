import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

const commonButtonLayoutStyles: ViewStyle = {
  flex: 1,
  alignSelf: 'center',
  padding: 5,
  borderRadius: 15,
};

const commonFontStyles: TextStyle = {
  fontSize: 20,
  fontWeight: '400',
  textAlign: 'center',
};

const styles = StyleSheet.create({
  helpButton: {
    ...commonButtonLayoutStyles,
    alignSelf: 'center',
    backgroundColor: 'gray',
  },

  helpButtonText: {
    ...commonFontStyles,
    color: 'white',
  },

  answerButton: {
    ...commonButtonLayoutStyles,
    backgroundColor: 'gray',
  },
  answerButtonText: {
    ...commonFontStyles,
    fontSize: 14,
  },

  finishButton: {
    ...commonButtonLayoutStyles,
    justifyContent: 'flex-end',
    backgroundColor: 'gray',
  },
  finishButtonText: {
    ...commonFontStyles,
  },

  closeModalButtonText: {
    fontSize: 20,
  },
});

export default styles;
