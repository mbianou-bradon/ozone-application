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

export default function HomeScreen() {
  /** State management */
  //   const userInfo = store.getState().userReducer.currentUser;
  const [search, setSearch] = useState<string>('');
  const [featuredCourses, setFeaturedCourses] = useState<ProductModel[]>();
  const [myCourses, setMyCourses] = useState<ProductModel[]>();

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
      .get(`/courses`)
      .then(response => {
        const data = response.data.course;
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
              {featuredCourses &&
                featuredCourses?.length > 0 &&
                featuredCourses?.map((featuredCourse, index) => {
                  return <ProductCard key={index} props={featuredCourse} />;
                })}
            </ScrollView>
            <ProductCard
              props={{
                _id: '',
                name: '',
                imageUrl: '',
                amount: 0,
                currency: 'Dollars',
                description: 'lorem ispusm',
                category: 'Fashio',
                brandName: 'Oxford',
                streetAddress: 'Miss Bright',
                city: 'Buea',
                stock: 10,
              }}
            />
          </View>
        </ScrollView>
      )}
    </>
  );
}
