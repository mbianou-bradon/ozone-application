import {StyleSheet} from 'react-native';
import theme from '../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.COLOR.LIGHT_GRAY,
  },
  courseCoverImage: {
    height: 300,
    width: '100%',
    backgroundColor: theme.COLOR.PRIMARY,
  },
  courseDetailContainer: {
    backgroundColor: theme.COLOR.LIGHT_DARK,
    width: '100%',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    marginTop: -30,
    position: 'relative',
    paddingHorizontal: theme.SIZE.MEDIUM,
  },
  handleShape: {
    height: 5,
    width: 100,
    borderRadius: 10,
    backgroundColor: theme.COLOR.PRIMARY,
    opacity: 0.5,
    position: 'absolute',
    left: '40%',
    top: 10,
  },
  courseTitleContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  courseTitle: {
    fontSize: 27,
    color: theme.COLOR.LIGHT,
  },
  subHeading: {
    fontSize: theme.SIZE.EXTRA_LARGE,
    color: theme.COLOR.LIGHT,
    marginBottom: 10,
  },
  section: {
    marginVertical: 30,
  },
  courseInfoContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginVertical: theme.SIZE.MEDIUM,
  },
  syllabusContainer: {
    rowGap: 10,
  },
  syllabusSubContainer: {
    rowGap: 10,
  },
  callToActionContainer: {
    backgroundColor: theme.COLOR.DARK,
    opacity: 0.75,
    width: '100%',
    height: 100,
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  callToActionInnerContainer: {
    backgroundColor: theme.COLOR.DARK,
    height: '80%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  enrollContainer: {
    backgroundColor: theme.COLOR.LIGHT_DARK,
    height: '70%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.SIZE.EXTRA_SMALL,
  },
  enrollText: {fontSize: theme.SIZE.EXTRA_LARGE, color: theme.COLOR.LIGHT},
});

export default styles;
