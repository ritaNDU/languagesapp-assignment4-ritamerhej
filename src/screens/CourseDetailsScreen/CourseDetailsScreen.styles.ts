import {Dimensions, PixelRatio, StyleSheet} from 'react-native';

const imageWidth = Dimensions.get('screen').width / 2;
const imageheight = imageWidth;

export const styles = StyleSheet.create({
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(imageWidth),
    height: PixelRatio.getPixelSizeForLayoutSize(imageheight),
    marginBottom: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },

  finishButtonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 10,
  },
});
