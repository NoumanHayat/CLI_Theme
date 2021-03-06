import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StartingPoint, CustomModel } from '../screens';
import { useData } from '../hooks';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default () => {
  const { translations } = useData();


  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
{/* 

      <Stack.Screen
        name="Custom Model"
        component={CustomModel}
        options={{ title: 'CustomModel' }}
      /> */}

      <Stack.Screen
        name="Starting Point"
        component={StartingPoint}
        options={{ title: translations.navigation.StartingPoint }}
      />
    </Stack.Navigator>
  );
};
