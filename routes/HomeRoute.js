import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from '../screens/Home/HomeScreen';
import GameScreen from '../screens/Home/GameScreen';

const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
    </Stack.Navigator>
  );
};

export default HomeRoute;
