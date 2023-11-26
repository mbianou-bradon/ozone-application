import {StyleSheet} from 'react-native';
import theme from '../../utils/theme/theme';

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.COLOR.PRIMARY,
  },
});

export default styles;
