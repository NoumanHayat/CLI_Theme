import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useData, useTheme } from '../hooks';
import { Home, Demo, Search, Me, Setting } from '../screens'
import { Block, Text, Image } from '../components/';
const Tab = createBottomTabNavigator();
export default function App() {
  const { translations } = useData();
  const { assets, colors, gradients, sizes, icons } = useTheme();
  return (
    <Tab.Navigator independent={true}
      screenOptions={{
        //  headerShown: false,
        "tabBarShowLabel": false,
        //  tabBarIconStyle: { display: "none" },
        tabBarStyle: {
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 10,
          backgroundColor: colors.contrasting,
          borderRadius: 10,
          height: 50,
        },




      }}


    >
      <Tab.Screen name={translations.screens.Home} component={Home}

        options={{

          tabBarIcon({ focused }) {
            // <a href="https://www.flaticon.com/free-icons/homepage" title="homepage icons">Homepage icons created by Freepik - Flaticon</a>
            return (
              <Block TabBarIcon>
                <Image source={icons.register} resizeMode='contain' width={25} height={25} style={{
                  tintColor: focused ? colors.primary : colors.matching
                }} />
              </Block>
            )
          },
          headerStyle: {
            backgroundColor: '#EDF3F7',
            borderRadius:10,


          },
          headerTintColor: '#000203',


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
              </Block>
            )
          },
          headerStyle: {
            backgroundColor: '#EDF3F7',

          },
          headerTintColor: '#000203',
        }}

      />

      <Tab.Screen name={translations.screens.Search} component={Search}
        options={{
          tabBarIcon({ focused }) {
            return (
              <Block TabBarIcon>
                <Image source={icons.search} resizeMode='contain' width={25} height={25} style={{
                  tintColor: focused ? colors.primary : colors.matching
                }} />
              </Block>
            )
          },
          headerStyle: {
            backgroundColor: '#EDF3F7',

          },
          headerTintColor: '#000203',
        }} />
      <Tab.Screen name={translations.screens.Me} component={Me} options={{
        tabBarIcon({ focused }) {
          return (
            <Block TabBarIcon>
              <Image source={icons.profile} resizeMode='contain' width={25} height={25} style={{
                tintColor: focused ? colors.primary : colors.matching
              }} />
            </Block>
          )
        }, headerStyle: {
          backgroundColor: '#EDF3F7',

        },
        headerTintColor: '#000203',
      }} />
      <Tab.Screen name={translations.screens.Setting} component={Setting} options={{
        tabBarIcon({ focused }) {
          return (
            <Block TabBarIcon>
              <Image source={icons.settings} resizeMode='contain' width={25} height={25} style={{
                tintColor: focused ? colors.primary : colors.matching
              }} />
            </Block>
          )
        }, headerStyle: {
          backgroundColor: '#EDF3F7',

        },
        headerTintColor: '#000203',
      }} />
    </Tab.Navigator>
  );
}

