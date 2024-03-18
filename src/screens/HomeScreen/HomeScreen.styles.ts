import {PixelRatio, StyleSheet} from 'react-native';

const imageContainerSize = 350;
const imageSize = 200;

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
    width: PixelRatio.getPixelSizeForLayoutSize(imageSize),
    height: PixelRatio.getPixelSizeForLayoutSize(imageSize),
    borderRadius: 40,
  },
  titleSize: {
    fontSize: 23,
    color: '#000',
    fontWeight: '700',
  },
  helpButtonContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
  },
});
