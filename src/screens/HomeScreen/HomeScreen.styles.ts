import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const {width} = Dimensions.get('window');

let imageSize = width < 385 ? 120 : 140;
const imageContainerWidth = 350;

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: imageContainerWidth,
    height: 330,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginBottom: 50,
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
