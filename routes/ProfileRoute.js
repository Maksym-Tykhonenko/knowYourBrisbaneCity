import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ProfileScreen from '../screens/Profile/ProfileScreen';

const ProfileRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileRoute;
