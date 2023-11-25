import {StyleSheet} from 'react-native';
import theme from '../../utils/theme/theme';

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: theme.COLOR.LIGHT_DARK,
    height: '100%',
    justifyContent: 'center',
  },
  activityColor: {
    color: theme.COLOR.PRIMARY,
  },
});

export default styles;
