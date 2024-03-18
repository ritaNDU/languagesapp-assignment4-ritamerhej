import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  secondaryTitle: {
    fontSize: theme.fontSize.large,
    fontWeight: '400',
    color: theme.colors.textPrimaryColor,
    marginBottom: 1.5,
  },
  mainTitle: {
    fontSize: theme.fontSize.extraLarge,
    fontWeight: '500',
    color: theme.colors.textPrimaryColor,
    textAlign: 'center',
    marginBottom: 10,
  },
  objectifContainer: {
    marginBottom: 10,
  },

  question: {
    fontSize: theme.fontSize.medium,
    fontWeight: '400',
    marginBottom: 7,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default styles;
