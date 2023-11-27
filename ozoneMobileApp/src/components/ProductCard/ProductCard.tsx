import {Image, Pressable, Text, View} from 'react-native';
import styles from './productCard.component.styles';
import {type ProductModel} from '../../utils/types/productModel';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackParams} from '../../navigations/NativeNavigation/NativeNavigation';
import theme from '../../utils/theme/theme';

export default function CourseCard(props: {props: ProductModel}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParams>>();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('CourseDetail', {id: props.props._id})
      }>
      {/* Course Cover Image Container */}
      <View style={styles.courseCoverImageContainer}>
        <Image
          source={{uri: props.props.imageUrl}}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View>
        {/* Product Details container */}
        <View style={styles.courseInfoContainer}>
          <Text style={styles.courseTitle}> {props.props.name} </Text>
          <View style={styles.courseDescriptionContainer}>
            <Text style={styles.courseDescription}>
              {props.props.description.substring(0, 80) + '...'}
            </Text>
          </View>
        </View>
        {/* Product info and cost */}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={{color: theme.COLOR.LIGHT_GRAY, fontSize: 10}}>
              Price:
            </Text>
            <Text style={{color: theme.COLOR.PRIMARY, fontSize: 10}}>
              {props.props.amount} {props.props.currency}
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={{color: theme.COLOR.LIGHT_GRAY, fontSize: 10}}>
              Available Stock:{' '}
            </Text>
            <Text style={{color: theme.COLOR.PRIMARY, fontSize: 10}}>
              {props.props.stock}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
