import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro,Creater,ButtonExample,CardExample,InputExample,Shopping} from '../screens';
import { useTranslation,useData} from '../hooks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default () => {
  const { translations } = useData();

  return (
    <Stack.Navigator > 
     <Stack.Screen  
      name="Shopping"
      component={Shopping}
      options={{title: translations.navigation.shopping}} 
    />
    <Stack.Screen 
      name="InputExample"
      component={InputExample}
      options={{title: translations.navigation.inputExample}}
    />
     <Stack.Screen 
        name="CardExample"
        component={CardExample}
        options={{title: translations.navigation.cardExample}}

      />
     <Stack.Screen
        name="ButtonExample"
        component={ButtonExample}
        options={{title: translations.navigation.buttonExample}}

      />
     <Stack.Screen
        name="Creater" 
        component={Creater}
        options={{title: translations.navigation.creater}}

      />
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{title: translations.navigation.home}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: translations.navigation.articles}}
      />


      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
