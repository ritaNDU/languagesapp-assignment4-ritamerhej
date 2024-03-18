import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const imageWidth = Dimensions.get('screen').width / 2;
const imageheight = imageWidth;

export const styles = StyleSheet.create({
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(imageWidth),
    height: PixelRatio.getPixelSizeForLayoutSize(imageheight),
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
