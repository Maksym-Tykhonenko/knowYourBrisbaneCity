import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import MapScreen from '../screens/Map/MapScreen';

const PhotoAlbymRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default PhotoAlbymRoute;
