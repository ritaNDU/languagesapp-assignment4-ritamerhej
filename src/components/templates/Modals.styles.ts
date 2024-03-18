import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import theme from '../../styles/theme';
import {verticalScale} from '../../styles/scaling';

const {width} = Dimensions.get('window');
const imageSize = width < 385 ? 150 : 200;

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
    gap: verticalScale(10),
  },
  title: {
    fontSize: theme.fontSize.XxLarge,
    fontWeight: '500',
    color: theme.colors.textPrimaryColor,
  },
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(imageSize),
    height: PixelRatio.getPixelSizeForLayoutSize(imageSize),
  },
  successMessage: {
    fontSize: theme.fontSize.large,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  helpInstruction: {
    fontSize: theme.fontSize.medium,
  },
  secondaryTitle: {
    fontSize: theme.fontSize.large,
    fontWeight: '500',
    color: theme.colors.textPrimaryColor,
  },
  helpTitle: {
    fontSize: theme.fontSize.extraLarge,
    color: theme.colors.textPrimaryColor,
    alignSelf: 'center',
  },
});

export default styles;
