
// import * as React from 'react';
// import { Text, View } from 'react-native';

// export default function Home() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Me!</Text>
//     </View>
//   );
// }
import React, { useCallback, useEffect } from 'react';
import { Linking, StatusBar } from 'react-native';

import { useTheme, useTranslation, useData } from '../hooks/';
import { Block, Button, Image, Text } from '../components/';

const Pro = () => {
  const { translations } = useData();

  const { assets, colors, gradients, sizes } = useTheme();

  useEffect(() => { 
    StatusBar.setBarStyle('light-content');
    return () => {
      StatusBar.setBarStyle('dark-content');
    };
  }, []);

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  return (
    <Block  padding={sizes.sm} paddingTop={0}>
      <Block align="center" marginTop={0}>
        <Image
          width={sizes.width * 0.65}
          height={sizes.width * 0.65}
          resizeMode="cover"
          padding={sizes.sm}
          paddingTop={0}
          radius={360}
          source={assets.creater}
        />
      </Block>
      <Block   >
        <Text align="center" marginBottom={sizes.sm} h4>
          {translations.creater.name}
        </Text>
        <Text semibold  marginTop={0}>{translations.creater.introduction}</Text>
        <Text semibold  marginTop={0}>{translations.creater.introduction_2}</Text>
        <Block padding={sizes.xl} paddingTop={0}>
          <Button gradient={gradients.primary} onPress={() => alert("Under Process")}>
            <Text p color={colors.matching}>Context US</Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Pro;
