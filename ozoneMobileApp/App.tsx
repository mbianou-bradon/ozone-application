/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NativeNavigation from './src/navigations/NativeNavigation/NativeNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeNavigation />
    </NavigationContainer>
  );
}

export default App;
