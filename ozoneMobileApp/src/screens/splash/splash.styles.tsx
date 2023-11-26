import {StyleSheet} from 'react-native';
import theme from '../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.COLOR.LIGHT_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoContainer: {
    position: 'absolute',
    top: 200,
  },
});

export default styles;
