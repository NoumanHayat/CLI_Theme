// import React, {useCallback, useEffect} from 'react';
// import {Linking, StatusBar} from 'react-native';

// import {useTheme, useTranslation} from '../hooks/';
// import {Block, Button, Image, Text} from '../components/';

// const Pro = () => {
//   const {t} = useTranslation();
//   const {assets, colors, gradients, sizes} = useTheme();

//   useEffect(() => {
//     StatusBar.setBarStyle('light-content');
//     return () => {
//       StatusBar.setBarStyle('dark-content');
//     };
//   }, []);

//   const handleWebLink = useCallback((url) => Linking.openURL(url), []);

//   return (
//     <Image
//       background
//       source={assets.background}
//       padding={sizes.padding}
//       style={{flex: 1}}>
//       <Block safe justify="center">
//         <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
//           <Text>Under Process</Text>
//         </Block>
//       </Block>
//     </Image>
//   );
// };

// export default Pro;
import React from 'react';
import {useData, useTheme, useTranslation} from '../hooks';
import { Block, Button, Image, Input, Text } from '../components/';


const App = () => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Block safe>
      <Text h3 style={{ fontFamily: 'OpenSans-Regular' }}>okoooooooooooooooooooooooooooooo</Text>

    </Block>
  ); 
};

export default App;