import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './productDetails.screen.styles';
import {LoadingScreen} from '../../components';
import theme from '../../utils/theme/theme';
import client from '../../utils/config/api/axios';
import handleError from '../../utils/functions/handleError';
import {type ProductModel} from '../../utils/types/productModel';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackParams} from '../../navigations/NativeNavigation/NativeNavigation';

type CourseDetailsScreenRouteProp = RouteProp<
  NativeStackParams,
  'CourseDetail'
>;

interface Props {
  route: CourseDetailsScreenRouteProp;
}

export default function ProductDetailScreen({route}: Props) {
  /** State Management */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productDetails, setProductDetails] = useState<ProductModel>();
  const id = route.params.id;
  console.log(id);
  const defaultImage =
    'https://static.vecteezy.com/system/resources/thumbnails/005/176/296/small/simple-education-logo-design-template-book-icon-emblem-for-courses-classes-and-schools-illustration-online-education-business-company-library-book-store-university-and-learning-concept-free-vector.jpg';
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    client
      .get(`/products/${id}`)
      .then(response => {
        const data = response.data.data;
        console.log(data.data);
        setProductDetails(data);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        handleError('error', err);
        navigation.goBack();
      });
    navigation.canGoBack();
  }, [id]);
  return (
    <>
      {isLoading ? (
        <LoadingScreen text="Getting Product details, Please wait" />
      ) : (
        <View style={{position: 'relative'}}>
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.courseCoverImage}>
              <Image
                source={{uri: productDetails?.imageUrl ?? defaultImage}}
                style={{height: '100%', width: '100%'}}
              />
            </View>

            {/* Course explicit details */}
            <View style={styles.courseDetailContainer}>
              <View style={styles.handleShape}></View>

              {/* Course title */}
              <View style={styles.courseTitleContainer}>
                <Text style={styles.courseTitle}>{productDetails?.name}</Text>
                {/* <Status text={String(productDetails?.enrollmentStatus)} /> */}
              </View>

              {/* <View style={styles.courseInfoContainer}>
                <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                  256 students
                </Text>
                <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                  {productDetails?.duration}
                </Text>
                <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                  {productDetails?.location}
                </Text>
              </View> */}

              <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                {productDetails?.description}
              </Text>

              {/* <View style={styles.section}>
                <Text style={styles.subHeading}>Pre-requisites</Text>
                <View>
                  {productDetails?.prerequisites.map((requirement, index) => {
                    return (
                      <Text key={index} style={{color: theme.COLOR.LIGHT_GRAY}}>
                        {requirement}
                      </Text>
                    );
                  })}
                </View>
              </View> */}

              <View style={styles.syllabusContainer}>
                <Text style={styles.subHeading}>Syllabus</Text>
                <View style={styles.syllabusSubContainer}>
                  {/* {productDetails?.syllabus.map((syllabus, index) => {
                    return (
                      <Accordion
                        key={index}
                        week={syllabus.week}
                        topic={syllabus.topic}
                        content={syllabus.content}
                      />
                    );
                  })} */}
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.subHeading}>Instructor info</Text>
                <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                  {/* Instructor name: {productDetails?.instructor} */}
                </Text>
              </View>
              <View style={{height: 130}}></View>
            </View>
          </ScrollView>
          <View style={styles.callToActionContainer}>
            <View style={styles.callToActionInnerContainer}>
              <TouchableOpacity style={styles.enrollContainer}>
                <Text style={styles.enrollText}>Enroll Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
