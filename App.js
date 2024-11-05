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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ReactNativeIdfaAaid, {
  AdvertisingInfoResponse,
} from '@sparkfabrik/react-native-idfa-aaid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import appsFlyer from 'react-native-appsflyer';
import AppleAdsAttribution from '@hexigames/react-native-apple-ads-attribution';
import DeviceInfo from 'react-native-device-info';

import HomeRoute from './routes/HomeRoute';
import PhotoAlbymRoute from './routes/PhotoAlbymRoute';
import SetingsRoute from './routes/SetingsRoute';
import ProfileRoute from './routes/ProfileRoute';
import ScheduleRoute from './routes/ScheduleRoute';
import KnowYourBrisbaneCityProdactScreen from './screens/KnowYourBrisbaneCityProdactScreen';

const App = () => {
  const [route, setRoute] = useState(true);
  //console.log('route==>', route)
  const [idfa, setIdfa] = useState();
  //console.log('idfa==>', idfa);
  const [appsUid, setAppsUid] = useState(null);
  const [sab1, setSab1] = useState();
  const [pid, setPid] = useState();
  //console.log('appsUid==>', appsUid);
  //console.log('sab1==>', sab1);
  //console.log('pid==>', pid);
  const [adServicesToken, setAdServicesToken] = useState(null);
  //console.log('adServicesToken', adServicesToken);
  const [adServicesAtribution, setAdServicesAtribution] = useState(null);
  const [adServicesKeywordId, setAdServicesKeywordId] = useState(null);
  ////////
  const [customerUserId, setCustomerUserId] = useState(null);
  //console.log('customerUserID==>', customerUserId);
  const [idfv, setIdfv] = useState();
  //console.log('idfv==>', idfv);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [
    idfa,
    appsUid,
    sab1,
    pid,
    adServicesToken,
    adServicesAtribution,
    adServicesKeywordId,
    customerUserId,
    idfv,
  ]);

  const setData = async () => {
    try {
      const data = {
        idfa,
        appsUid,
        sab1,
        pid,
        adServicesToken,
        adServicesAtribution,
        adServicesKeywordId,
        customerUserId,
        idfv,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('App', jsonData);
      //console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      //console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('App');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('Дані дістаються в AsyncStorage');
        console.log('parsedData in App==>', parsedData);
        setIdfa(parsedData.idfa);
        setAppsUid(parsedData.appsUid);
        setSab1(parsedData.sab1);
        setPid(parsedData.pid);
        setAdServicesToken(parsedData.adServicesToken);
        setAdServicesAtribution(parsedData.adServicesAtribution);
        setAdServicesKeywordId(parsedData.adServicesKeywordId);
        setCustomerUserId(parsedData.customerUserId);
        setIdfv(parsedData.idfv);
      } else {
        await fetchIdfa();
        await requestOneSignallFoo();
        await performAppsFlyerOperations();
        await getUidApps();
        await fetchAdServicesToken(); // Вставка функції для отримання токену
        await fetchAdServicesAttributionData(); // Вставка функції для отримання даних

        onInstallConversionDataCanceller();
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  ///////// Ad Attribution
  //fetching AdServices token
  const fetchAdServicesToken = async () => {
    try {
      const token = await AppleAdsAttribution.getAdServicesAttributionToken();
      setAdServicesToken(token);
      //Alert.alert('token', adServicesToken);
    } catch (error) {
      await fetchAdServicesToken();
      //console.error('Помилка при отриманні AdServices токену:', error.message);
    }
  };

  //fetching AdServices data
  const fetchAdServicesAttributionData = async () => {
    try {
      const data = await AppleAdsAttribution.getAdServicesAttributionData();
      const attributionValue = data.attribution ? '1' : '0';
      setAdServicesAtribution(attributionValue);
      setAdServicesKeywordId(data.keywordId);
      //Alert.alert('data', data)
    } catch (error) {
      console.error('Помилка при отриманні даних AdServices:', error.message);
    }
  };

  ///////// AppsFlyer
  // 1ST FUNCTION - Ініціалізація AppsFlyer
  const performAppsFlyerOperations = async () => {
    try {
      await new Promise((resolve, reject) => {
        appsFlyer.initSdk(
          {
            devKey: 'XFmBDwMitGREaZSaboCCRR',
            appId: '6737478474',
            isDebug: true,
            onInstallConversionDataListener: true,
            onDeepLinkListener: true,
            timeToWaitForATTUserAuthorization: 10,
          },
          resolve,
          reject,
        );
      });
      console.log('App.js AppsFlyer ініціалізовано успішно');
      // Отримуємо idfv та встановлюємо його як customerUserID
      const uniqueId = await DeviceInfo.getUniqueId();
      setIdfv(uniqueId); // Зберігаємо idfv у стейті

      appsFlyer.setCustomerUserId(uniqueId, res => {
        console.log('Customer User ID встановлено успішно:', uniqueId);
        setCustomerUserId(uniqueId); // Зберігаємо customerUserID у стейті
      });
    } catch (error) {
      console.log(
        'App.js Помилка під час виконання операцій AppsFlyer:',
        error,
      );
    }
  };

  // 2ND FUNCTION - Ottrimannya UID AppsFlyer
  const getUidApps = async () => {
    try {
      const appsFlyerUID = await new Promise((resolve, reject) => {
        appsFlyer.getAppsFlyerUID((err, uid) => {
          if (err) {
            reject(err);
          } else {
            resolve(uid);
          }
        });
      });
      //console.log('on getAppsFlyerUID: ' + appsFlyerUID);
      //Alert.alert('appsFlyerUID', appsFlyerUID);
      setAppsUid(appsFlyerUID);
    } catch (error) {
      //console.error(error);
    }
  };

  // 3RD FUNCTION - Отримання найменування AppsFlyer
  const onInstallConversionDataCanceller = appsFlyer.onInstallConversionData(
    res => {
      try {
        const isFirstLaunch = JSON.parse(res.data.is_first_launch);
        if (isFirstLaunch === true) {
          if (res.data.af_status === 'Non-organic') {
            const media_source = res.data.media_source;
            console.log('App.js res.data==>', res.data);

            const {campaign, pid, af_adset, af_ad, af_os} = res.data;
            setSab1(campaign);
            setPid(pid);
          } else if (res.data.af_status === 'Organic') {
            console.log('App.js res.data==>', res.data);
            const {af_status} = res.data;
            console.log('This is first launch and a Organic Install');
            setSab1(af_status);
          }
        } else {
          console.log('This is not first launch');
        }
      } catch (error) {
        console.log('Error processing install conversion data:', error);
      }
    },
  );

  ///////// OneSignall
  // 3204d618-9d4b-447d-a056-2bfb1f231c78
  const requestPermission = () => {
    return new Promise((resolve, reject) => {
      try {
        OneSignal.Notifications.requestPermission(true);
        resolve(); // Викликаємо resolve(), оскільки OneSignal.Notifications.requestPermission не повертає проміс
      } catch (error) {
        reject(error); // Викликаємо reject() у разі помилки
      }
    });
  };

  // Виклик асинхронної функції requestPermission() з використанням async/await
  const requestOneSignallFoo = async () => {
    try {
      await requestPermission();
      // Якщо все Ok
    } catch (error) {
      //console.log('err в requestOneSignallFoo==> ', error);
    }
  };

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('3204d618-9d4b-447d-a056-2bfb1f231c78');

  OneSignal.Notifications.addEventListener('click', event => {
    //console.log('OneSignal: notification clicked:', event);
  });
  //Add Data Tags
  OneSignal.User.addTag('key', 'value');

  ///////// IDFA
  const fetchIdfa = async () => {
    try {
      const res = await ReactNativeIdfaAaid.getAdvertisingInfo();
      if (!res.isAdTrackingLimited) {
        setIdfa(res.id);
        //console.log('setIdfa(res.id);');
      } else {
        //console.log('Ad tracking is limited');
        setIdfa(true); //true
        //setIdfa(null);
        fetchIdfa();
        //Alert.alert('idfa', idfa);
      }
    } catch (err) {
      //console.log('err', err);
      setIdfa(null);
      await fetchIdfa(); //???
    }
  };

  ///////// Route useEff
  // brilliant-magnificent-exhilaration.space
  useEffect(() => {
    const checkUrl = `https://brilliant-magnificent-exhilaration.space/mbjdRpj8`;

    const targetData = new Date('2024-11-03T10:00:00'); //дата з якої поч працювати webView
    const currentData = new Date(); //текущая дата

    if (currentData <= targetData) {
      setRoute(false);
    } else {
      fetch(checkUrl)
        .then(r => {
          if (r.status === 200) {
            //console.log('status==>', r.status);
            setRoute(true);
          } else {
            setRoute(false);
          }
        })
        .catch(e => {
          //console.log('errar', e);
          setRoute(false);
        });
    }
  }, []);

  ///////// Route
  const Route = ({isFatch}) => {
    if (isFatch) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            initialParams={{
              idfa: idfa,
              sab1: sab1,
              pid: pid,
              uid: appsUid,
              adToken: adServicesToken,
              adAtribution: adServicesAtribution,
              adKeywordId: adServicesKeywordId,
              customerUserId: customerUserId,
              idfv: idfv,
            }}
            name="KnowYourBrisbaneCityProdactScreen"
            component={KnowYourBrisbaneCityProdactScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    }
    return (
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
                  colors={['rgba(29, 182, 37, 0.5)', 'rgba(9, 227, 229, 0.5)']} // градієнт від синього до червоного
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
                  colors={['rgba(29, 182, 37, 0.5)', 'rgba(9, 227, 229, 0.5)']} // градієнт від синього до червоного
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
                  colors={['rgba(29, 182, 37, 0.5)', 'rgba(9, 227, 229, 0.5)']} // градієнт від синього до червоного
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
                  colors={['rgba(29, 182, 37, 0.5)', 'rgba(9, 227, 229, 0.5)']} // градієнт від синього до червоного
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
                  colors={['rgba(29, 182, 37, 0.5)', 'rgba(9, 227, 229, 0.5)']} // градієнт від синього до червоного
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
    );
  };

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
        <Route isFatch={route} />
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
