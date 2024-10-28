import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ScheduleHomeScreen from '../screens/Schedule/ScheduleHomeScreen';
import PhotoAlbumScreen from '../screens/Schedule/PhotoAlbumScreen';
import ArticlesScreen from '../screens/Schedule/ArticlesScreen';
import PersonalScheduleScreen from '../screens/Schedule/PersonalScheduleScreen';
import FolderScreen from '../screens/Schedule/FolderScreen';
import ArticleDetail from '../screens/Schedule/ArticleDetail';
import NewArticleDetail from '../screens/Schedule/NewArticleDetail';

const ScheduleRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ScheduleHomeScreen" component={ScheduleHomeScreen} />
      <Stack.Screen name="PhotoAlbumScreen" component={PhotoAlbumScreen} />
      <Stack.Screen name="ArticlesScreen" component={ArticlesScreen} />
      <Stack.Screen
        name="PersonalScheduleScreen"
        component={PersonalScheduleScreen}
      />
      <Stack.Screen name="FolderScreen" component={FolderScreen} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
      <Stack.Screen name="NewArticleDetail" component={NewArticleDetail} />
    </Stack.Navigator>
  );
};

export default ScheduleRoute;
