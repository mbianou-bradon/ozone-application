import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ProductDetailScreen, Splash} from '../../screens';
import MyTabs, {
  TabStackParams,
} from '../bottomTabNavigation/BottomTabNavigation';
// import Login from '../../screens/auth/login/Login';

export type NativeStackParams = {
  Splash: undefined;
  Tab: TabStackParams;
  MyCourses: undefined;
  CourseDetail: {id: string};
  Login: undefined;
};

export default function NativeNavigation() {
  const NativeStack = createStackNavigator<NativeStackParams>();

  return (
    <NativeStack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <NativeStack.Screen name="Splash" component={Splash} />
      <NativeStack.Screen name="Tab" component={MyTabs} />
      <NativeStack.Screen name="CourseDetail" component={ProductDetailScreen} />
      {/* <NativeStack.Screen name="Login" component={Login} /> */}
    </NativeStack.Navigator>
  );
}
