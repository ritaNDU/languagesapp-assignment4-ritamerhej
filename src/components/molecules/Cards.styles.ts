import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const logoSize = 25;
const {width} = Dimensions.get('window');

const courseImageSize = width < 385 ? 80 : width < 415 ? 90 : 100;

const styles = StyleSheet.create({
  courseCardContainer: {
    width: width < 385 ? 220 : 250,
    elevation: 10,
    backgroundColor: theme.colors.backgroundColor,
    padding: 30,

    margin: 20,
    marginBottom: 30,
    borderRadius: 20,
    alignItems: 'center',

    overflow: 'hidden',
  },

  imageContainer: {
    height: 200,
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    borderRadius: 25,
    marginBottom: 10,
  },
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(courseImageSize),
    height: PixelRatio.getPixelSizeForLayoutSize(courseImageSize),
  },

  cardTitles: {
    flex: 1,
    fontSize: theme.fontSize.medium,
    fontWeight: width < 410 ? '500' : '600',
    color: theme.colors.textPrimaryColor,
    margin: 2.5,
  },

  lessonCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 25,
    paddingVertical: 10,

    backgroundColor: theme.colors.secondary,
    marginBottom: 10,
    borderRadius: 20,
  },

  logoContainer: {
    width: logoSize,
    height: logoSize,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  logo: {
    width: logoSize,
    height: logoSize,
  },
});

export default styles;
