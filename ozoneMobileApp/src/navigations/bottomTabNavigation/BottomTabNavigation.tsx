import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens';
import theme from '../../utils/theme/theme';
// import {store} from '../../redux/store/store';

export type TabStackParams = {
  Home: undefined;
  Profile: undefined;
};

export default function MyTabs() {
  //   const isAuth = store.getState().userReducer.isAuth;
  const Tab = createBottomTabNavigator<TabStackParams>();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {display: 'none'},
        tabBarStyle: {
          height: 50,
          paddingBottom: 15,
          backgroundColor: theme.COLOR.DARK,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* {isAuth && <Tab.Screen name="Profile" component={Profile} />} */}
    </Tab.Navigator>
  );
}
