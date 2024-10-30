import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity, Animated, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();
import Layaut from './components/Layaut';

import HomeRoute from './routes/HomeRoute';
import PhotoAlbymRoute from './routes/PhotoAlbymRoute';
import SetingsRoute from './routes/SetingsRoute';
import ProfileRoute from './routes/ProfileRoute';
import ScheduleRoute from './routes/ScheduleRoute';

const App = () => {
  ///////// Louder
  const [louderIsEnded, setLouderIsEnded] = useState(false);
  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 3500,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 3500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 8000);
  }, []);

  return (
    <NavigationContainer>
      {!louderIsEnded ? (
        <Layaut>
          <View
            style={{
              position: 'relative',
              flex: 1,
              //backgroundColor: 'rgba(0,0,0)',
            }}>
            <Animated.Image
              source={require('./assets/upgr/Loader1.png')}
              style={{
                //...props.style,
                opacity: appearingAnim,
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            />
            <Animated.Image
              source={require('./assets/upgr/Loader2.png')}
              style={{
                //...props.style,
                opacity: appearingSecondAnim,
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            />
          </View>
        </Layaut>
      ) : (
        <Tab.Navigator
          initialRouteName="HomeRoute"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: '#fff',
            tabBarInactiveBackgroundColor: 'rgba(255, 255, 255, 0.0)', // трошки прозорий білий
            tabBarStyle: {
              position: 'absolute',
              backgroundColor: 'rgba(255, 255, 255, 0.0)', // прозорий фон для таббара
              borderRadius: 15, // закруглені краї
              margin: 10, // відступи з країв екрану
              marginBottom: 20, // відступ від низу
              height: 60, // висота таббара
              shadowColor: '#000', // колір тіні
              shadowOffset: {width: 0, height: 5}, // зміщення тіні
              shadowOpacity: 0.3, // прозорість тіні
              shadowRadius: 10, // розмиття тіні
              elevation: 5, // висота тіні для Android
            },
          }}>
          <Tab.Screen
            name="ProfileRoute"
            component={ProfileRoute}
            options={{
              tabBarButton: props => (
                <TouchableOpacity {...props} style={{flex: 1, marginRight: 10}}>
                  <LinearGradient
                    colors={[
                      'rgba(29, 182, 37, 0.5)',
                      'rgba(9, 227, 229, 0.5)',
                    ]} // градієнт від синього до червоного
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={{
                      width: windowWidth / 6,
                      height: 60,
                      borderRadius: 30,
                      borderWidth: 3,
                      borderColor: '#c1dfde',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {props.children}
                  </LinearGradient>
                </TouchableOpacity>
              ),
              tabBarIcon: ({focused}) => {
                return (
                  <Entypo
                    name="man"
                    style={{
                      fontSize: 30,
                      color: focused ? '#c1dfde' : '#131312',
                    }}
                  />
                );
              },
            }}
          />

          <Tab.Screen
            name="PhotoAlbymRoute"
            component={PhotoAlbymRoute}
            options={{
              tabBarButton: props => (
                <TouchableOpacity {...props} style={{flex: 1, marginRight: 10}}>
                  <LinearGradient
                    colors={[
                      'rgba(29, 182, 37, 0.5)',
                      'rgba(9, 227, 229, 0.5)',
                    ]} // градієнт від синього до червоного
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={{
                      width: windowWidth / 6,
                      height: 60,
                      borderRadius: 30,
                      borderWidth: 3,
                      borderColor: '#c1dfde',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {props.children}
                  </LinearGradient>
                </TouchableOpacity>
              ),
              tabBarIcon: ({focused}) => {
                return (
                  <FontAwesome5
                    name="map-marked-alt"
                    style={{
                      fontSize: 30,
                      color: focused ? '#c1dfde' : '#131312',
                    }}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="HomeRoute"
            component={HomeRoute}
            options={{
              tabBarButton: props => (
                <TouchableOpacity {...props} style={{flex: 1, marginRight: 10}}>
                  <LinearGradient
                    colors={[
                      'rgba(29, 182, 37, 0.5)',
                      'rgba(9, 227, 229, 0.5)',
                    ]} // градієнт від синього до червоного
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={{
                      width: windowWidth / 6,
                      height: 60,
                      borderRadius: 30,
                      borderWidth: 3,
                      borderColor: '#c1dfde',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {props.children}
                  </LinearGradient>
                </TouchableOpacity>
              ),
              tabBarIcon: ({focused}) => {
                return (
                  <Entypo
                    name="home"
                    style={{
                      fontSize: 50,
                      color: focused ? '#c1dfde' : '#131312',
                    }}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="ScheduleRoute"
            component={ScheduleRoute}
            options={{
              tabBarButton: props => (
                <TouchableOpacity {...props} style={{flex: 1, marginRight: 10}}>
                  <LinearGradient
                    colors={[
                      'rgba(29, 182, 37, 0.5)',
                      'rgba(9, 227, 229, 0.5)',
                    ]} // градієнт від синього до червоного
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={{
                      width: windowWidth / 6,
                      height: 60,
                      borderRadius: 30,
                      borderWidth: 3,
                      borderColor: '#c1dfde',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {props.children}
                  </LinearGradient>
                </TouchableOpacity>
              ),
              tabBarIcon: ({focused}) => {
                return (
                  <MaterialIcons
                    name="schedule"
                    style={{
                      fontSize: 30,
                      color: focused ? '#c1dfde' : '#131312',
                    }}
                  />
                );
              },
            }}
          />

          <Tab.Screen
            name="SetingsRoute"
            component={SetingsRoute}
            options={{
              tabBarButton: props => (
                <TouchableOpacity {...props} style={{flex: 1, marginRight: 10}}>
                  <LinearGradient
                    colors={[
                      'rgba(29, 182, 37, 0.5)',
                      'rgba(9, 227, 229, 0.5)',
                    ]} // градієнт від синього до червоного
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={{
                      width: windowWidth / 6,
                      height: 60,
                      borderRadius: 30,
                      borderWidth: 3,
                      borderColor: '#c1dfde',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {props.children}
                  </LinearGradient>
                </TouchableOpacity>
              ),
              tabBarIcon: ({focused}) => {
                return (
                  <Ionicons
                    name="settings"
                    style={{
                      fontSize: 30,
                      color: focused ? '#c1dfde' : '#131312',
                    }}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
