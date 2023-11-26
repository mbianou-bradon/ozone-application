import {Image, Pressable, Text, View} from 'react-native';
import styles from './productCard.component.styles';
import {type ProductModel} from '../../utils/types/productModel';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackParams} from '../../navigations/NativeNavigation/NativeNavigation';

export default function CourseCard(props: {props: ProductModel}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParams>>();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('CourseDetail', {id: props.props._id})
      }>
      <View style={styles.courseRatingStatus}>
        {/* Course status */}
        <View style={styles.courseStatus}>
          {/* <Text style={styles.statusText}>{props.props.enrollmentStatus}</Text> */}
        </View>
      </View>
      {/* Course Cover Image Container */}
      <View style={styles.courseCoverImageContainer}>
        <Image
          source={{uri: props.props.imageUrl}}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      {/* Course Details container */}
      <View style={styles.courseInfoContainer}>
        <Text style={styles.courseTitle}> {props.props.name} </Text>
        {/* <View style={styles.courseInfoSubContainer}>
          <Text style={styles.courseSchedule}>
            Schedule: {props.props.schedule}
          </Text>
          <Text style={styles.courseTotalDuration}>
            Duration: {props.props.duration}
          </Text>
        </View> */}
        <View style={styles.courseDescriptionContainer}>
          <Text style={styles.courseDescription}>
            {props.props.description}
          </Text>
        </View>
      </View>
      {/* Instructor info and cost */}
      <View style={styles.courseInstructorContainer}>
        <Text style={styles.courseInstructor}>
          {/* Instructor: {props.props.instructor} */}
        </Text>
      </View>
    </Pressable>
  );
}
