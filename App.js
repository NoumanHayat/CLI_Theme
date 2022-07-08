/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {useFonts} from 'expo-font';
import React from 'react';
import { View} from 'react-native';
import {DataProvider} from './src/hooks';
import {useTheme} from './src/hooks';
import { Text,Block,Button} from './src/components/';

// import AppNavigation from './src/navigation/App';
const App = () => {
   const {assets, colors, gradients, sizes} = useTheme();
  return (
     <DataProvider>
      <Block padding={15}>
      <Text  p color={colors.primary}>hello</Text>
      <Button
          gradient={gradients.info}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.info} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            info
          </Text>
        </Button>
      </Block>
    </DataProvider>
  );
};

export default App;
 