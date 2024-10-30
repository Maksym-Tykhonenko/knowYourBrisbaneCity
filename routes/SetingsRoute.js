import React, {useState, useEffect} from 'react';
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ControlSound from '../components/soundSystem/ControlSound';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function SetingsScreen() {
  const [vibroStatus, setVibroStatus] = useState(true);
  console.log('vibroStatus==>', vibroStatus);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [vibroStatus]);

  const setData = async () => {
    try {
      const data = {
        vibroStatus,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`Vibration`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Vibration`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setVibroStatus(parsedData.vibroStatus);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/upgr/Background.png')}>
        <View
          style={{
            flex: 1,
            marginTop: 50,
            alignItems: 'center',
            //justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 60,
              color: '#c1dfde',
              marginBottom: 40,
              fontFamily: 'PlaywriteGBS-Italic',
            }}>
            Settings:{' '}
          </Text>

          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              paddingTop: 20,
              borderRadius: 20,
            }}>
            {/**Music */}
            <View
              style={{
                flexDirection: 'row',
                width: windowWidth,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                marginLeft: 50,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color: '#c1dfde',
                  fontFamily: 'PlaywriteGBS-Italic',
                }}>
                Music
              </Text>
              <ControlSound />
            </View>

            {/**Vibro */}
            <View
              style={{
                flexDirection: 'row',
                //width: windowWidth,
                //justifyContent: 'center',
                //alignItems: 'baseline',
                marginBottom: 10,
                marginLeft: 50,
                marginTop: 40,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color: '#c1dfde',
                  fontFamily: 'PlaywriteGBS-Italic',
                  marginRight: 35,
                }}>
                Vibro
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setVibroStatus(!vibroStatus);
                }}
                style={{
                  marginLeft: 20,
                }}>
                {vibroStatus ? (
                  <MaterialCommunityIcons
                    style={{fontSize: 60, marginBottom: 20, color: '#6dcd01'}}
                    name="vibrate"
                  />
                ) : (
                  <MaterialCommunityIcons
                    style={{fontSize: 60, marginBottom: 20, color: 'red'}}
                    name="vibrate-off"
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
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
