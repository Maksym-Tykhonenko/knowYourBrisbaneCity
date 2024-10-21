import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
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

import HomeRoute from './routes/HomeRoute';
import PhotoAlbymRoute from './routes/PhotoAlbymRoute';
import SetingsRoute from './routes/SetingsRoute';
import ProfileRoute from './routes/ProfileRoute';
import ScheduleRoute from './routes/ScheduleRoute';

const App = () => {
  return (
    <NavigationContainer>
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
                  colors={['red', 'blue']} // градієнт від синього до червоного
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={{
                    width: windowWidth / 6,
                    height: 60,
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: '#fbc02e',
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
                    color: focused ? '#fbc02e' : '#6469a9',
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
                  colors={['red', 'blue']} // градієнт від синього до червоного
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={{
                    width: windowWidth / 6,
                    height: 60,
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: '#fbc02e',
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
                    color: focused ? '#fbc02e' : '#6469a9',
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
                  colors={['red', 'blue']} // градієнт від синього до червоного
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={{
                    width: windowWidth / 6,
                    height: 60,
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: '#fbc02e',
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
                    color: focused ? '#fbc02e' : '#6469a9',
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
                  colors={['red', 'blue']} // градієнт від синього до червоного
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={{
                    width: windowWidth / 6,
                    height: 60,
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: '#fbc02e',
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
                    color: focused ? '#fbc02e' : '#6469a9',
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
                  colors={['red', 'blue']} // градієнт від синього до червоного
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={{
                    width: windowWidth / 6,
                    height: 60,
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: '#fbc02e',
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
                    color: focused ? '#fbc02e' : '#6469a9',
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
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
