import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
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
import theme from '../../utils/theme/theme';

export default function HomeScreen() {
  /** State management */
  //   const userInfo = store.getState().userReducer.currentUser;
  const [search, setSearch] = useState<string>('');
  const [featuredProducts, setFeaturedProducts] = useState<ProductModel[]>();
  const [page, setPage] = useState<number>(1);

  /**Display States */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [endOfListReached, setEndOfListReached] = useState<boolean>(false);

  const handleSearch = () => {
    setSearch(search);
  };

  const getProducts = async (page: number) =>
    client.get(`/products?page=${page}`);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProducts(page)
      .then(response => {
        setFeaturedProducts(response.data.products);
        setRefreshing(false);
      })
      .catch(error => {
        console.log(error);
        setRefreshing(false);
      });
  }, []);

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
    getProducts(page)
      .then(async response => {
        const data = await response.data.products;
        setFeaturedProducts(data);
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
        <View style={styles.container}>
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

            <FlatList
              data={featuredProducts}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => <ProductCard props={item} />}
              ListEmptyComponent={
                <View>
                  <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                    Empty List
                  </Text>
                </View>
              }
              bounces
              keyExtractor={item => item._id}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  colors={[
                    theme.COLOR.PRIMARY,
                    theme.COLOR.SECONDARY,
                    theme.COLOR.LIGHT_GRAY,
                  ]}
                />
              }
              ItemSeparatorComponent={() => (
                <View style={{marginBottom: 14}}></View>
              )}
              ListFooterComponent={<View style={{paddingBottom: 120}}></View>}
              onEndReached={() => {
                if (!refreshing) {
                  if (!endOfListReached) {
                    getProducts(page).then(response => {
                      if (response.data.products.length !== 0) {
                        setFeaturedProducts(currentProduct =>
                          Array.from(
                            new Set([
                              ...(currentProduct as ProductModel[]),
                              ...response.data.products,
                            ]),
                          ),
                        );
                        setPage(currentPage => currentPage + 1);
                      } else {
                        setEndOfListReached(true);
                      }
                    });
                  }
                }
              }}
              onEndReachedThreshold={0.5}
            />
          </View>
        </View>
      )}
    </>
  );
}
