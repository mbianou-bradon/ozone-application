import {StyleSheet} from 'react-native';
import theme from '../../utils/theme/theme';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: theme.SIZE.EXTRA_SMALL,
    paddingVertical: theme.SIZE.MEDIUM,
    alignItems: 'center',
    columnGap: theme.SIZE.EXTRA_LARGE,
    maxWidth: 300,
    borderRadius: theme.SIZE.SMALL,
    position: 'relative',
  },
  courseRatingStatus: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: theme.SIZE.EXTRA_SMALL,
    position: 'absolute',
    top: 20,
    zIndex: 10,
  },
  courseRating: {
    backgroundColor: theme.COLOR.PRIMARY,
    borderRadius: theme.SIZE.EXTRA_LARGE,
    paddingHorizontal: theme.SIZE.LARGE,
    opacity: 0.7,
    height: 25,
    justifyContent: 'center',
  },
  courseStatus: {
    backgroundColor: theme.COLOR.SECONDARY,
    borderRadius: theme.SIZE.LARGE,
    paddingHorizontal: theme.SIZE.MEDIUM,
    height: 25,
    opacity: 0.7,
    justifyContent: 'center',
  },
  statusText: {
    color: theme.COLOR.LIGHT,
    fontSize: theme.SIZE.EXTRA_SMALL,
  },
  courseCoverImageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: theme.COLOR.PRIMARY,
    borderRadius: theme.SIZE.EXTRA_SMALL,
  },
  courseTitle: {
    fontSize: theme.SIZE.MEDIUM,
    fontWeight: '600',
    color: theme.COLOR.LIGHT,
  },
  courseInfoContainer: {
    rowGap: theme.SIZE.SMALL,
    marginVertical: theme.SIZE.EXTRA_SMALL,
  },
  courseInfoSubContainer: {
    columnGap: 5,
  },
  courseSchedule: {
    fontSize: theme.SIZE.EXTRA_SMALL,
    fontWeight: '500',
    lineHeight: 14,
    color: theme.COLOR.LIGHT_GRAY,
  },
  courseTotalDuration: {
    fontSize: theme.SIZE.EXTRA_SMALL,
    fontWeight: '500',
    lineHeight: 14,
    color: theme.COLOR.LIGHT_GRAY,
  },
  courseDescriptionContainer: {
    gap: 5,
  },
  courseDescription: {
    fontSize: theme.SIZE.EXTRA_SMALL,
    color: theme.COLOR.LIGHT_GRAY,
  },
  // Instructor and cost styles
  courseInstructorContainer: {
    width: '95%',
  },
  courseInstructor: {
    fontSize: theme.SIZE.EXTRA_SMALL,
    color: theme.COLOR.LIGHT,
  },
});

export default styles;
