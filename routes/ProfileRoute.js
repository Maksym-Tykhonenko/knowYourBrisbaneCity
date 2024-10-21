import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function ProfileScreen() {
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
          <Text>Profile Screen</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const ProfileRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileRoute;
