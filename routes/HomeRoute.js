import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from '../screens/Home/HomeScreen';
import GameScreen from '../screens/Home/GameScreen';
import ExplorerLevelScreen from '../screens/Home/ExplorerLevel/ExplorerLevelScreen';
import Level1Screen from '../screens/Home/ExplorerLevel/Level1Screen';
import Level2Screen from '../screens/Home/ExplorerLevel/Level2Screen';
import Level3Screen from '../screens/Home/ExplorerLevel/Level3Screen';
import Level4Screen from '../screens/Home/ExplorerLevel/Level4Screen';
import Level5Screen from '../screens/Home/ExplorerLevel/Level5Screen';
import Level6Screen from '../screens/Home/ExplorerLevel/Level6Screen';
import Level7Screen from '../screens/Home/ExplorerLevel/Level7Screen';
import Level8Screen from '../screens/Home/ExplorerLevel/Level8Screen';
import Level9Screen from '../screens/Home/ExplorerLevel/Level9Screen';
import Level10Screen from '../screens/Home/ExplorerLevel/Level10Screen';

const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen
        name="ExplorerLevelScreen"
        component={ExplorerLevelScreen}
      />
      <Stack.Screen name="Level1Screen" component={Level1Screen} />
      <Stack.Screen name="Level2Screen" component={Level2Screen} />
      <Stack.Screen name="Level3Screen" component={Level3Screen} />
      <Stack.Screen name="Level4Screen" component={Level4Screen} />
      <Stack.Screen name="Level5Screen" component={Level5Screen} />
      <Stack.Screen name="Level6Screen" component={Level6Screen} />
      <Stack.Screen name="Level7Screen" component={Level7Screen} />
      <Stack.Screen name="Level8Screen" component={Level8Screen} />
      <Stack.Screen name="Level9Screen" component={Level9Screen} />
      <Stack.Screen name="Level10Screen" component={Level10Screen} />
    </Stack.Navigator>
  );
};

export default HomeRoute;
