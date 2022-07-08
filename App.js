/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {useFonts} from 'expo-font';
import React from 'react';
import {Text, View} from 'react-native';
import {DataProvider} from './src/hooks';
import {useTheme} from './src/hooks';

// import AppNavigation from './src/navigation/App';
const App = () => {
   const {assets, colors, gradients, sizes} = useTheme();
  return (
     <DataProvider>
      <Text >{sizes.base}</Text>
    </DataProvider>
  );
};

export default App;
 