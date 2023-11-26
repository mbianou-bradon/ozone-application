import React from 'react';
import {View, Text} from 'react-native';
import styles from './logo.styles';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>OZONE</Text>
    </View>
  );
}
