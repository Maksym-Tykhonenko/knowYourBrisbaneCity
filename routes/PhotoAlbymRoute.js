import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function PhotoAlbymScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>PhotoAlbym Screen</Text>
    </View>
  );
}

const PhotoAlbymRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PhotoAlbymScreen" component={PhotoAlbymScreen} />
    </Stack.Navigator>
  );
};

export default PhotoAlbymRoute;
