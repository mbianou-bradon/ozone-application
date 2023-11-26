import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {
  //   Header,
  LoadingScreen,
  ProductCard,
} from '../../components';
import styles from './home.screen.styles';
import {type ProductModel} from '../../utils/types/productModel';
import client from '../../utils/config/api/axios';
// import {store} from '../../redux/store/store';
import handleError from '../../utils/functions/handleError';
import axios from 'axios';

export default function HomeScreen() {
  /** State management */
  //   const userInfo = store.getState().userReducer.currentUser;
  const [search, setSearch] = useState<string>('');
  const [featuredProducts, setFeaturedCourses] = useState<ProductModel[]>();

  /**Display States */
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = () => {
    setSearch(search);
  };

  useEffect(() => {
    // client
    //   .get(`/mycourses?${userInfo.id}`)
    //   .then(response => {
    //     const data = response.data;
    //     setMyCourses(data);
    //   })
    //   .catch(error => {
    //     handleError('Error', `${error.message}`);
    //   });
    setIsLoading(true);
    client
      .get('/products')
      .then(async response => {
        const data = await response.data.products;
        setFeaturedCourses(data);
        setIsLoading(false);
      })
      .catch(error => {
        handleError('Error', `${error.message}`);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen text="Getting Data Please wait" />
      ) : (
        <ScrollView style={styles.container}>
          {/* <Header /> */}
          <View style={styles.searchHeaderMainContainer}>
            {/* Search Field */}
            <View style={styles.searchHeaderContainer}>
              <TextInput
                placeholder="Search for the product your are looking for..."
                style={styles.searchText}
                placeholderTextColor={
                  styles.searchTextPlaceholderTextColor.color
                }
                onChangeText={value => setSearch(value)}
                onSubmitEditing={handleSearch}
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.ongoingCourseContainerHeader}>
              <Text style={styles.ContinueLearningText}>Featured Products</Text>
              <Pressable>
                <Text style={styles.seeAllText}>See all</Text>
              </Pressable>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.ongoingCourseList}
              horizontal>
              {featuredProducts &&
                featuredProducts?.length > 0 &&
                featuredProducts?.map((featuredProduct, index) => {
                  return <ProductCard key={index} props={featuredProduct} />;
                })}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </>
  );
}
