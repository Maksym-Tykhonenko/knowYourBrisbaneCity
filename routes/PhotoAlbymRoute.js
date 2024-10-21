import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function PhotoAlbymScreen() {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/back.webp')}>
        <View
          style={{
            flex: 1,

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>PhotoAlbym Screen</Text>
        </View>
      </ImageBackground>
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
