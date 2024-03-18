import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const {width} = Dimensions.get('window');
const imageSize = width < 385 ? 100 : width < 410 ? 120 : 140;

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: PixelRatio.getPixelSizeForLayoutSize(imageSize),
    marginBottom: 5,
  },

  title: {
    fontSize: theme.fontSize.large,
    fontWeight: '400',
    color: theme.colors.textPrimaryColor,
    marginBottom: 10,
  },

  finishButtonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 10,
  },
  description: {
    fontSize: theme.fontSize.medium,
    fontWeight: '300',
    color: theme.colors.textPrimaryColor,
    marginBottom: 10,
  },
});
