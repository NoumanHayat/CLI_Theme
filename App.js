/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { useFonts } from 'expo-font';
import React from 'react';
import { View } from 'react-native';
import { DataProvider } from './src/hooks';
import { useTheme } from './src/hooks';
import { Text, Block, Button, Checkbox, Image } from './src/components/';

// import AppNavigation from './src/navigation/App';
const App = () => {
  const { assets, colors, gradients, sizes, icons } = useTheme();
  return (
    <DataProvider>
      <Block padding={15}>
        <Text p color={colors.primary}>hello</Text>
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

        <Text color={colors.primary}>hello</Text>
        <Checkbox
          marginRight={sizes.sm}
          checked={(checked) => { alert("ok") }}
          onfPress={(value) => { alert(value) }}
        />
        <Image
          source={assets.card1}
          color={colors.checkboxIcon}  
        />
        <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            paddingBottom={sizes.l}
            radius={sizes.cardRadius}
            source={assets.background}>
            
            
          </Image>
      </Block>
    </DataProvider>
  );
};

export default App;
