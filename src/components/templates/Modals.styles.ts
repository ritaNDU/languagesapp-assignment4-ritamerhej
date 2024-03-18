import {PixelRatio, StyleSheet} from 'react-native';

const imageSize = 200;
const titleSize = 30;

const styles = StyleSheet.create({
  modalTemplate: {
    padding: 20,
  },

  helpModalContainer: {
    gap: 10,
  },

  instructions: {
    gap: 5,
  },

  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    fontSize: titleSize,
  },
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(imageSize),
    height: PixelRatio.getPixelSizeForLayoutSize(imageSize),
  },
  successMessage: {
    fontSize: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  helpInstruction: {
    fontSize: 17,
  },
  secondaryTitle: {
    fontSize: 19,
    fontWeight: '500',
  },
  helpTitle: {
    fontSize: titleSize,
    alignSelf: 'center',
  },
});

export default styles;
