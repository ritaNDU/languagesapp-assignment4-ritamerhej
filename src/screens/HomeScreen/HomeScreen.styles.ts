import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const {width} = Dimensions.get('window');

const imageContainerSize = 350;
const imageSize = width < 385 ? 180 : 200;

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: imageContainerSize,
    height: imageContainerSize,
    alignSelf: 'center',
    borderRadius: 40,
    marginBottom: 40,
  },
  image: {
    width: '100%',
    height: PixelRatio.getPixelSizeForLayoutSize(imageSize),
    borderRadius: 40,
  },
  titleSize: {
    fontSize: theme.fontSize.XxLarge,
    color: theme.colors.textPrimaryColor,
    fontWeight: '700',
  },
  helpButtonContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
  },
});
