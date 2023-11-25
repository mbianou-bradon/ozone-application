import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import theme from '../../utils/theme/theme';
import styles from './loadingScreen.component.styles';

export default function LoadingScreen(props: {text: string}) {
  return (
    <View>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={styles.activityColor.color} />
        <Text style={{color: theme.COLOR.LIGHT_GRAY, textAlign: 'center'}}>
          {props.text}
        </Text>
      </View>
    </View>
  );
}
