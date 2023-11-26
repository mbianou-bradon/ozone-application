import React, {useEffect, useState} from 'react';
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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

  const handlePhoneResponse = () => {
    let url = `tel:${productDetails?.user.phoneNumber}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          handleError('Phone Number Error', `Cannot open URL: ${url}`);
        }
      })
      .catch(err => handleError('Phone Number Error', `${err}`));
  };
  return (
    <>
      {isLoading ? (
        <LoadingScreen text="Getting Product details, Please wait" />
      ) : (
        <View style={{position: 'relative'}}>
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.productCoverImage}>
              <Image
                source={{uri: productDetails?.imageUrl ?? defaultImage}}
                style={{height: '100%', width: '100%'}}
              />
            </View>

            {/* Course explicit details */}
            <View style={styles.productDetailContainer}>
              <View style={styles.handleShape}></View>

              {/* Course title */}
              <View style={styles.productTitleContainer}>
                <Text style={styles.productTitle}>{productDetails?.name}</Text>
              </View>

              <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                {productDetails?.description}
              </Text>

              <View style={styles.section}>
                <Text style={styles.subHeading}>Cost and avalaibility</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', gap: 5}}>
                    <Text style={{color: theme.COLOR.LIGHT_GRAY}}>Price:</Text>
                    <Text style={{color: theme.COLOR.PRIMARY}}>
                      {productDetails?.amount} {productDetails?.currency}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', gap: 5}}>
                    <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                      Available Stock:{' '}
                    </Text>
                    <Text style={{color: theme.COLOR.PRIMARY}}>
                      {productDetails?.stock}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.syllabusContainer}>
                <Text style={styles.subHeading}>Company Detail</Text>
                <View style={styles.syllabusSubContainer}>
                  <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                    Company: {productDetails?.user.brandName}
                  </Text>
                  <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                    Location: {productDetails?.user.streetAddress}{' '}
                    {productDetails?.user.city}
                  </Text>
                  <View style={{flexDirection: 'row', gap: 5}}>
                    <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                      Phone Number:
                    </Text>
                    <Pressable onPress={handlePhoneResponse}>
                      <Text style={{color: theme.COLOR.PRIMARY}}>
                        {productDetails?.user.phoneNumber}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>

              <View style={{height: 130}}></View>
            </View>
          </ScrollView>
          <View style={styles.callToActionContainer}>
            <View style={styles.callToActionInnerContainer}>
              <TouchableOpacity style={styles.buyContainer}>
                <Text style={styles.buyText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
