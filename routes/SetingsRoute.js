import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function SetingsScreen() {
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
          <Text>Setings Screen</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const SetingsRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SetingsScreen" component={SetingsScreen} />
    </Stack.Navigator>
  );
};

export default SetingsRoute;
