
import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useData, useTheme } from '../hooks';

import { Home, Demo, Article, Me, Setting } from '../screens'
import { COLORS } from '../constants/light';
import { Block, Button, Input, Switch, Modal, Text } from '../components/';

const Tab = createBottomTabNavigator();

export default function App() {
  const { translations } = useData();
  const { assets, colors, gradients, sizes, icons } = useTheme();

  return (
    <Tab.Navigator independent={true} screenOptions={{
      headerShown: false,
      "tabBarShowLabel": false,
      //  tabBarIconStyle: { display: "none" },
      tabBarStyle: {
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 10,
        backgroundColor: colors.contrasting,
        borderRadius: 10,
        height: 90,
        ...styles.shadow

      }

    }} >
      <Tab.Screen name={translations.screens.Home} component={Home}
        options={{
          tabBarIcon({ focused }) {
            return (
              <Block style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                <Image source={require('../assets/icons/apple.png')} resizeMode='contain' style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.primary : colors.matching
                }} />
                <Text style={{ color: focused ? colors.primary : colors.matching, fontSize: 20 }}>Home</Text>
              </Block>
            )
          }
        }}
      />
      <Tab.Screen name={translations.screens.Demo} component={Demo}
        options={{
          tabBarIcon({ focused }) {
            return (
              <Block style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                <Image source={require('../assets/icons/apple.png')} resizeMode='contain' style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.primary : colors.matching
                }} />
                <Text style={{ color: focused ? colors.primary : colors.matching, fontSize: 20 }}>Home</Text>
              </Block>
            )
          }
        }} />

      <Tab.Screen name={translations.screens.Article} component={Article}
        options={{
          tabBarIcon({ focused }) {
            return (
              <Block style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                <Image source={require('../assets/icons/apple.png')} resizeMode='contain' style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.primary : colors.matching
                }} />
                <Text style={{ color: focused ? colors.primary : colors.matching, fontSize: 20 }}>Home</Text>
              </Block>
            )
          }
        }} />


      <Tab.Screen name={translations.screens.Me} component={Me} options={{
        tabBarIcon({ focused }) {
          return (
            <Block style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image source={require('../assets/icons/apple.png')} resizeMode='contain' style={{
                width: 25,
                height: 25,
                tintColor: focused ? colors.primary : colors.matching
              }} />
              <Text style={{ color: focused ? colors.primary : colors.matching, fontSize: 20 }}>Home</Text>
            </Block>
          )
        }
      }} />
      <Tab.Screen name={translations.screens.Setting} component={Setting} options={{
        tabBarIcon({ focused }) {
          return (
            <Block style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image source={require('../assets/icons/apple.png')} resizeMode='contain' style={{
                width: 25,
                height: 25,
                tintColor: focused ? colors.primary : colors.matching
              }} />
              <Text style={{ color: focused ? colors.primary : colors.matching, fontSize: 20 }}>Home</Text>
            </Block>
          )
        }
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  //change needed here
  shadowColor: "#7F5DF0",
  shadowOffSet: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadious: 3.5,
  elevation: 5
})