import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Logo} from '../../components';
import theme from '../../utils/theme/theme';
import styles from './splash.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackParams} from '../../navigations/NativeNavigation/NativeNavigation';

export default function Splash() {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate({key: '', name: 'Tab'});
    }, 2000);
  }, []);

  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParams>>();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.COLOR.LIGHT_DARK} />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
    </SafeAreaView>
  );
}
