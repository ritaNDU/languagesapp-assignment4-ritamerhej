import {PixelRatio, StyleSheet} from 'react-native';

const logoSize = 25;
const courseImageSize = 108;

const styles = StyleSheet.create({
  courseCardContainer: {
    width: 250,
    elevation: 10,
    backgroundColor: 'lightgray',
    padding: 30,

    margin: 20,
    marginBottom: 30,
    borderRadius: 20,

    overflow: 'hidden',
  },

  imageContainer: {
    height: 200,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 25,
    marginBottom: 10,
  },
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(courseImageSize),
    height: PixelRatio.getPixelSizeForLayoutSize(courseImageSize),
  },

  description: {
    color: 'gray',
  },

  cardTitles: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    margin: 2.5,
  },

  lessonCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 25,
    paddingVertical: 10,

    backgroundColor: 'lightgray',
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
