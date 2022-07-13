
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useData, useTheme } from '../hooks';

import { Home, Demo, Article, Me, Setting } from '../screens'
import { COLORS } from '../constants/light';
import { Block, Button, Input, Switch, Modal, Text, Image } from '../components/';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        height: 70,
      }

    }} >
      <Tab.Screen name={translations.screens.Home} component={Home}
        options={{
          tabBarIcon({ focused }) {
            // <a href="https://www.flaticon.com/free-icons/homepage" title="homepage icons">Homepage icons created by Freepik - Flaticon</a>
            return (
              <Block TabBarIcon>
                <Image source={icons.register} resizeMode='contain' width={25} height={25} style={{
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
              <Block TabBarIcon>
                <Image source={icons.documentation} resizeMode='contain' width={25} height={25} style={{
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
              <Block TabBarIcon>
                <Image source={icons.search} resizeMode='contain' width={45} height={45} style={{
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
            <Block TabBarIcon>
              <Image source={icons.profile} resizeMode='contain' width={25} height={25} style={{
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
            <Block TabBarIcon>
              <Image source={icons.settings} resizeMode='contain' width={25} height={25} style={{
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

