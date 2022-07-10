
// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import { Alert, Animated, Linking, StyleSheet } from 'react-native';
// import * as t from '../constants/translations/en.json';
// import {
//   useIsDrawerOpen,
//   createDrawerNavigator,
//   DrawerContentComponentProps,
//   DrawerContentOptions,
//   DrawerContentScrollView,
// } from '@react-navigation/drawer';

// import Screens from './Screens';
// import { useData, useTheme } from '../hooks';

// const Drawer = createDrawerNavigator();
// import { FlatList, View } from 'react-native';
// import { Block, Button, Image, Input, Product, Text } from '../components/';
// import { Home } from '../screens';

// const ScreensStack = () => {
//   const { colors } = useTheme();
//   const isDrawerOpen = useIsDrawerOpen();
//   const animation = useRef(new Animated.Value(0)).current;

//   const scale = animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [1, 0.88],
//   });

//   const borderRadius = animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 16],
//   });

//   const animatedStyle = {
//     borderRadius: borderRadius,
//     transform: [{ scale: scale }],
//   };

//   useEffect(() => {
//     Animated.timing(animation, {
//       duration: 200,
//       useNativeDriver: true,
//       toValue: isDrawerOpen ? 1 : 0,
//     }).start();
//   }, [isDrawerOpen, animation]);

//   return (
//     <Animated.View
//       style={StyleSheet.flatten([
//         animatedStyle,
//         {
//           flex: 1,
//           overflow: 'hidden',
//           borderColor: colors.card,
//           borderWidth: isDrawerOpen ? 1 : 0,
//         },
//       ])}>
//       {/*  */}
//       <Screens />
//     </Animated.View>
//   );
// };
// //===================================================================================================
// const DrawerContent = async (
//   props
// ) => {
//   const { translations, changeLanguage } = useData();

//   const { navigation } = props;
//   const { isDark, handleIsDark } = useData();
//   const [active, setActive] = useState('Home');
//   const { assets, colors, gradients, sizes } = useTheme();
//   const labelColor = colors.text;

//   const handleNavigation = useCallback(
//     (to) => {
//       setActive(to);
//       navigation.navigate(to);
//     },
//     [navigation, setActive],
//   );

//   const handleWebLink = useCallback((url) => Linking.openURL(url), []);

//   // screen list for Drawer menu
//   const screens = [
//     { name: translations.screens.home, to: 'Home', icon: assets.home },
//     { name: translations.screens.components, to: 'Components', icon: assets.components },
//     { name: translations.screens.articles, to: 'Articles', icon: assets.document },
//     { name: translations.screens.rental, to: 'Pro', icon: assets.rental },
//     { name: translations.screens.profile, to: 'Profile', icon: assets.profile },
//     { name: translations.screens.settings, to: 'Pro', icon: assets.settings },
//     { name: translations.screens.register, to: 'Register', icon: assets.register },
//     { name: translations.screens.extra, to: 'Pro', icon: assets.extras },
//     { name: translations.screens.creater, to: 'Creater', icon: assets.extras },
//     { name: translations.screens.buttonExample, to: 'ButtonExample', icon: assets.extras },
//     { name: translations.screens.cardExample, to: 'CardExample', icon: assets.extras },
//     { name: translations.screens.inputExample, to: 'InputExample', icon: assets.extras },
//     { name: translations.screens.shopping, to: 'Shopping', icon: assets.extras },
//   ];

//   return (
//     <DrawerContentScrollView
//       {...props}
//       scrollEnabled
//       removeClippedSubviews
//       renderToHardwareTextureAndroid
//       contentContainerStyle={{ paddingBottom: sizes.padding }}>
//       <Block paddingHorizontal={sizes.padding} >
//         <Block flex={0} row align="center" marginBottom={sizes.l}>
//           <Image
//             radius={0}
//             width={33}
//             height={33}
//             color={colors.contrasting}
//             source={assets.logo}
//             marginRight={sizes.sm}
//           />
//           <Block>
//             <Text size={12} color={colors.contrasting} semibold>
//               {translations.app.name}
//             </Text>
//             <Text size={12} color={colors.contrasting} semibold>
//               {translations.app.native}
//             </Text>
//           </Block>
//         </Block>

//         {screens?.map((screen, index) => {
//           const isActive = active === screen.to;
//           return (
//             <Button
//               row
//               justify="flex-start"
//               marginBottom={sizes.s}
//               key={`menu-screen-${screen.name}-${index}`}
//               onPress={() => handleNavigation(screen.to)}>
//               <Block
//                 flex={0}
//                 radius={6}
//                 align="center"
//                 justify="center"
//                 width={sizes.md}
//                 height={sizes.md}
//                 marginRight={sizes.s}
//                 gradient={gradients[isActive ? 'primary' : 'white']}>
//                 <Image
//                   radius={0}
//                   width={14}
//                   height={14}
//                   source={screen.icon}
//                   color={colors[isActive ? 'white' : 'black']}
//                 />
//               </Block>
//               <Text p semibold={isActive} color={colors.contrasting}>
//                 {screen.name}
//               </Text>
//             </Button>
//           );
//         })}

//         <Block
//           flex={0}
//           height={1}
//           marginRight={sizes.md}
//           marginVertical={sizes.sm}
//           gradient={gradients.menu}
//         />

//         <Text semibold transform="uppercase" opacity={0.5}>
//           {translations.menu.documentation}
//         </Text>

//         <Button
//           row
//           justify="flex-start"
//           marginTop={sizes.sm}
//           marginBottom={sizes.s}
//           onPress={() =>
//             handleWebLink('https://github.com/NoumanHayat')
//           }>
//           <Block
//             flex={0}
//             radius={6}
//             align="center"
//             justify="center"
//             width={sizes.md}
//             height={sizes.md}
//             marginRight={sizes.s}
//             gradient={gradients.white}>
//             <Image
//               radius={0}
//               width={14}
//               height={14}
//               color={colors.contrasting}
//               source={assets.documentation}
//             />
//           </Block>
//           <Text p color={colors.contrasting}>
//             {translations.menu.started}
//           </Text>
//         </Button>

//         <Block row justify="space-between" marginTop={sizes.sm}>
//           <Text color={colors.contrasting}>{translations.darkMode}</Text>
//           <Switch
//             checked={isDark}
//             onPress={(checked) => {
//               handleIsDark(checked);

//             }}
//           />
//         </Block>
//       </Block>
//     </DrawerContentScrollView>
//   );
// };


//===================================================================================================
// const App = () => {
//   const { translations, changeLanguage } = useData();
//   console.log("okk=" + translations.creater.name);

//   const { assets, colors, fonts, gradients, sizes } = useTheme();
//   return (
//     <Block safe>
//       <Text h3 style={{ fontFamily: 'OpenSans-Regular' }}>{translations.creater.name}</Text>
//       <Button
//         gradient={gradients.primary}
//         marginBottom={sizes.base}
//         onPress={() => {
//           changeLanguage()
//         }}>
//         <Text white bold transform="uppercase">
//           Change Language
//         </Text>
//       </Button>
//     </Block>
//   );
// };

// export default App;



// export default () => {
//   const { gradients } = useTheme();

//   return (
//     <Block gradient={gradients.drawer}>
//       <Drawer.Navigator
//         drawerType="slide"
//         overlayColor="transparent"
//         sceneContainerStyle={{ backgroundColor: 'transparent' }}
//         drawerContent={(props) => <DrawerContent {...props} />}
//         drawerStyle={{
//           flex: 1,
//           width: '60%',
//           borderRightWidth: 0,
//           backgroundColor: 'transparent',
//         }}>
//         <Drawer.Screen name="Screens" component={ScreensStack} />
//       </Drawer.Navigator>
//     </Block>
//   );
// };
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useData, useTheme } from '../hooks';
import { Home, Components } from '../screens';
function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const { translations, changeLanguage } = useData();
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name={translations.screens.home} component={Home} />
    //     <Drawer.Screen name={translations.screens.components} component={Components} />
    //   </Drawer.Navigator>
    // // </NavigationContainer>
    <Drawer.Navigator
    // drawerType="slide"
    // overlayColor="transparent"
    // sceneContainerStyle={{ backgroundColor: 'transparent' }}
    // drawerContent={(props) => <DrawerContent {...props} />}
    // drawerStyle={{
    //   flex: 1,
    //   width: '60%',
    //   borderRightWidth: 0,
    //   backgroundColor: 'transparent',
    // }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Components" component={Components} />
    </Drawer.Navigator>
  );
}