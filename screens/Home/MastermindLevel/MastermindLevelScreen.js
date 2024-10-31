import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Layaut from '../../../components/Layaut';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import OperationBtn from '../../../components/OperationBtn';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MastermindLevelScren = ({navigation}) => {
  const [lock1lvl, setLock1lvl] = useState(true);
  const [lock2lvl, setLock2lvl] = useState(false);
  const [lock3lvl, setLock3lvl] = useState(false);
  const [lock4lvl, setLock4lvl] = useState(false);
  const [lock5lvl, setLock5lvl] = useState(false);
  const [lock6lvl, setLock6lvl] = useState(false);
  const [lock7lvl, setLock7lvl] = useState(false);
  const [lock8lvl, setLock8lvl] = useState(false);
  console.log('lock1lvl', lock1lvl);
  console.log('lock2lvl', lock2lvl);
  console.log('lock3lvl', lock3lvl);
  console.log('lock4lvl', lock4lvl);
  console.log('lock5lvl', lock5lvl);
  console.log('lock6lvl', lock6lvl);
  console.log('lock7lvl', lock7lvl);
  console.log('lock8lvl', lock8lvl);

  useEffect(() => {
    getAboute2LvlData();
    getAboute3LvlData();
    getAboute4LvlData();
    getAboute5LvlData();
    getAboute6LvlData();
    getAboute7LvlData();
    getAboute8LvlData();
  }, []);

  const getAboute2LvlData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`LevelMastermind1Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLock2lvl(parsedData.passteLevel);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getAboute3LvlData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`LevelMastermind2Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLock3lvl(parsedData.passteLevel);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getAboute4LvlData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`LevelMastermind3Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLock4lvl(parsedData.passteLevel);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getAboute5LvlData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`LevelMastermind4Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLock5lvl(parsedData.passteLevel);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getAboute6LvlData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`LevelMastermind5Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLock6lvl(parsedData.passteLevel);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getAboute7LvlData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`LevelMastermind6Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLock7lvl(parsedData.passteLevel);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getAboute8LvlData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`LevelMastermind7Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLock8lvl(parsedData.passteLevel);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const GoBack = () => {
    navigation.goBack();
  };
  return (
    <Layaut>
      <View style={styles.conteiner}>
        <View style={styles.levelsConteiner}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceHorizontal={true}
            horizontal={true}>
            {/**LVL 1 */}
            <TouchableOpacity
              disabled={lock1lvl ? false : true}
              onPress={() => {
                navigation.navigate('MastLevel1Screen');
              }}
              style={{
                ...styles.levelBtn,
                borderColor: lock1lvl ? '#c1dfde' : 'grey',
              }}>
              <LinearGradient
                colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']}
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  ...styles.levelBtnLinearGradient,
                  borderColor: lock1lvl ? '#c1dfde' : 'grey',
                }}>
                <Text
                  style={{
                    color: lock1lvl ? '#c1dfde' : 'grey',
                    fontSize: 60,
                    fontWeight: 'bold',
                    marginBottom: 20,
                  }}>
                  1
                </Text>
                <Text
                  style={{
                    color: lock1lvl ? '#c1dfde' : 'grey',
                    fontFamily: 'PlaywriteGBS-Italic',
                    fontSize: 30,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  Brisbane’s Wildlife
                </Text>
                <Image
                  style={{width: 100, height: 100}}
                  source={
                    lock1lvl
                      ? require('../../../assets/unlocked.png')
                      : require('../../../assets/lock.png')
                  }
                />
              </LinearGradient>
            </TouchableOpacity>

            {/**LVL 2 */}
            <TouchableOpacity
              disabled={lock2lvl ? false : true}
              onPress={() => {
                navigation.navigate('MastLevel2Screen');
              }}
              style={{
                ...styles.levelBtn,
                borderColor: lock2lvl ? '#c1dfde' : 'grey',
              }}>
              <LinearGradient
                colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']}
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  ...styles.levelBtnLinearGradient,
                  borderColor: lock2lvl ? '#c1dfde' : 'grey',
                }}>
                <Text
                  style={{
                    color: lock2lvl ? '#c1dfde' : 'grey',
                    fontSize: 60,
                    fontWeight: 'bold',
                    marginBottom: 20,
                  }}>
                  2
                </Text>
                <Text
                  style={{
                    color: lock2lvl ? '#c1dfde' : 'grey',
                    fontFamily: 'PlaywriteGBS-Italic',
                    fontSize: 30,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  Brisbane’s Geography
                </Text>
                <Image
                  style={{width: 100, height: 100}}
                  source={
                    lock2lvl
                      ? require('../../../assets/unlocked.png')
                      : require('../../../assets/lock.png')
                  }
                />
              </LinearGradient>
            </TouchableOpacity>

            {/**LVL 3 */}
            <TouchableOpacity
              disabled={lock3lvl ? false : true}
              onPress={() => {
                navigation.navigate('MastLevel3Screen');
              }}
              style={{
                ...styles.levelBtn,
                borderColor: lock3lvl ? '#c1dfde' : 'grey',
              }}>
              <LinearGradient
                colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']}
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  ...styles.levelBtnLinearGradient,
                  borderColor: lock3lvl ? '#c1dfde' : 'grey',
                }}>
                <Text
                  style={{
                    color: lock3lvl ? '#c1dfde' : 'grey',
                    fontSize: 60,
                    fontWeight: 'bold',
                    marginBottom: 20,
                  }}>
                  3
                </Text>
                <Text
                  style={{
                    color: lock3lvl ? '#c1dfde' : 'grey',
                    fontFamily: 'PlaywriteGBS-Italic',
                    fontSize: 30,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  Brisbane’s Food Scene
                </Text>
                <Image
                  style={{width: 100, height: 100}}
                  source={
                    lock3lvl
                      ? require('../../../assets/unlocked.png')
                      : require('../../../assets/lock.png')
                  }
                />
              </LinearGradient>
            </TouchableOpacity>

            {/**LVL 4 */}
            <TouchableOpacity
              disabled={lock4lvl ? false : true}
              onPress={() => {
                navigation.navigate('MastLevel4Screen');
              }}
              style={{
                ...styles.levelBtn,
                borderColor: lock4lvl ? '#c1dfde' : 'grey',
              }}>
              <LinearGradient
                colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']}
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  ...styles.levelBtnLinearGradient,
                  borderColor: lock4lvl ? '#c1dfde' : 'grey',
                }}>
                <Text
                  style={{
                    color: lock4lvl ? '#c1dfde' : 'grey',
                    fontSize: 60,
                    fontWeight: 'bold',
                    marginBottom: 20,
                  }}>
                  4
                </Text>
                <Text
                  style={{
                    color: lock4lvl ? '#c1dfde' : 'grey',
                    fontFamily: 'PlaywriteGBS-Italic',
                    fontSize: 30,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  Brisbane’s Famous People
                </Text>
                <Image
                  style={{width: 100, height: 100}}
                  source={
                    lock4lvl
                      ? require('../../../assets/unlocked.png')
                      : require('../../../assets/lock.png')
                  }
                />
              </LinearGradient>
            </TouchableOpacity>

            {/**LVL 5 */}
            <TouchableOpacity
              disabled={lock5lvl ? false : true}
              onPress={() => {
                navigation.navigate('MastLevel5Screen');
              }}
              style={{
                ...styles.levelBtn,
                borderColor: lock5lvl ? '#c1dfde' : 'grey',
              }}>
              <LinearGradient
                colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']}
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  ...styles.levelBtnLinearGradient,
                  borderColor: lock5lvl ? '#c1dfde' : 'grey',
                }}>
                <Text
                  style={{
                    color: lock5lvl ? '#c1dfde' : 'grey',
                    fontSize: 60,
                    fontWeight: 'bold',
                    marginBottom: 20,
                  }}>
                  5
                </Text>
                <Text
                  style={{
                    color: lock5lvl ? '#c1dfde' : 'grey',
                    fontFamily: 'PlaywriteGBS-Italic',
                    fontSize: 30,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  Brisbane’s Festivals
                </Text>
                <Image
                  style={{width: 100, height: 100}}
                  source={
                    lock5lvl
                      ? require('../../../assets/unlocked.png')
                      : require('../../../assets/lock.png')
                  }
                />
              </LinearGradient>
            </TouchableOpacity>

            {/**LVL 6 */}
            <TouchableOpacity
              disabled={lock6lvl ? false : true}
              onPress={() => {
                navigation.navigate('MastLevel6Screen');
              }}
              style={{
                ...styles.levelBtn,
                borderColor: lock6lvl ? '#c1dfde' : 'grey',
              }}>
              <LinearGradient
                colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']}
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  ...styles.levelBtnLinearGradient,
                  borderColor: lock6lvl ? '#c1dfde' : 'grey',
                }}>
                <Text
                  style={{
                    color: lock6lvl ? '#c1dfde' : 'grey',
                    fontSize: 60,
                    fontWeight: 'bold',
                    marginBottom: 20,
                  }}>
                  6
                </Text>
                <Text
                  style={{
                    color: lock6lvl ? '#c1dfde' : 'grey',
                    fontFamily: 'PlaywriteGBS-Italic',
                    fontSize: 30,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  Brisbane’s Architecture
                </Text>
                <Image
                  style={{width: 100, height: 100}}
                  source={
                    lock6lvl
                      ? require('../../../assets/unlocked.png')
                      : require('../../../assets/lock.png')
                  }
                />
              </LinearGradient>
            </TouchableOpacity>

            {/**LVL 7 */}
            <TouchableOpacity
              disabled={lock7lvl ? false : true}
              onPress={() => {
                navigation.navigate('MastLevel7Screen');
              }}
              style={{
                ...styles.levelBtn,
                borderColor: lock7lvl ? '#c1dfde' : 'grey',
              }}>
              <LinearGradient
                colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']}
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  ...styles.levelBtnLinearGradient,
                  borderColor: lock7lvl ? '#c1dfde' : 'grey',
                }}>
                <Text
                  style={{
                    color: lock7lvl ? '#c1dfde' : 'grey',
                    fontSize: 60,
                    fontWeight: 'bold',
                    marginBottom: 20,
                  }}>
                  7
                </Text>
                <Text
                  style={{
                    color: lock7lvl ? '#c1dfde' : 'grey',
                    fontFamily: 'PlaywriteGBS-Italic',
                    fontSize: 30,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  Brisbane’s Parks and Nature Reserves
                </Text>
                <Image
                  style={{width: 100, height: 100}}
                  source={
                    lock7lvl
                      ? require('../../../assets/unlocked.png')
                      : require('../../../assets/lock.png')
                  }
                />
              </LinearGradient>
            </TouchableOpacity>

            {/**LVL 8 */}
            <TouchableOpacity
              disabled={lock8lvl ? false : true}
              onPress={() => {
                navigation.navigate('MastLevel8Screen');
              }}
              style={{
                ...styles.levelBtn,
                borderColor: lock8lvl ? '#c1dfde' : 'grey',
              }}>
              <LinearGradient
                colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']}
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  ...styles.levelBtnLinearGradient,
                  borderColor: lock8lvl ? '#c1dfde' : 'grey',
                }}>
                <Text
                  style={{
                    color: lock8lvl ? '#c1dfde' : 'grey',
                    fontSize: 60,
                    fontWeight: 'bold',
                    marginBottom: 20,
                  }}>
                  8
                </Text>
                <Text
                  style={{
                    color: lock8lvl ? '#c1dfde' : 'grey',
                    fontFamily: 'PlaywriteGBS-Italic',
                    fontSize: 30,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  Brisbane’s Sports
                </Text>
                <Image
                  style={{width: 100, height: 100}}
                  source={
                    lock8lvl
                      ? require('../../../assets/unlocked.png')
                      : require('../../../assets/lock.png')
                  }
                />
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/**Btn Back */}
        <OperationBtn
          castomeStyles={styles.castomeStyles}
          title="Back"
          foo={GoBack}
        />
      </View>
    </Layaut>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelsConteiner: {
    marginTop: windowHeight * 0.25,
    height: windowHeight,
    //flexDirection: 'row',
    //flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  castomeStyles: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
  levelBtn: {
    marginHorizontal: 20,
    width: windowWidth * 0.75,
    height: windowHeight * 0.6,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: '#c1dfde',
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelBtnLinearGradient: {
    paddingHorizontal: 20,
    height: '100%',
    width: '100%',
    borderWidth: 3,
    borderRadius: 40,
    borderColor: '#c1dfde',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MastermindLevelScren;
