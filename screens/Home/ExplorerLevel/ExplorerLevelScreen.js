import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Layaut from '../../../components/Layaut';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from '../../../components/OperationBtn';
import LavelsBtn from '../../../components/LavelsBtn';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExplorerLevelScreen = ({navigation}) => {
  const [lock1lvl, setLock1lvl] = useState(true);
  const [lock2lvl, setLock2lvl] = useState(false);
  const [lock3lvl, setLock3lvl] = useState(false);
  const [lock4lvl, setLock4lvl] = useState(false);
  const [lock5lvl, setLock5lvl] = useState(false);
  const [lock6lvl, setLock6lvl] = useState(false);
  const [lock7lvl, setLock7lvl] = useState(false);
  const [lock8lvl, setLock8lvl] = useState(false);
  const [lock9lvl, setLock9lvl] = useState(false);
  const [lock10lvl, setLock10lvl] = useState(false);
  console.log('lock2lvl', lock2lvl);

  useEffect(() => {
    getAboute2LvlData();
    getAboute3LvlData();
    getAboute4LvlData();
    getAboute5LvlData();
    getAboute6LvlData();
    getAboute7LvlData();
    getAboute8LvlData();
    getAboute9LvlData();
    getAboute10LvlData();
  }, []);

  const getAboute2LvlData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level1Screen`);
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
      const jsonData = await AsyncStorage.getItem(`Level2Screen`);
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
      const jsonData = await AsyncStorage.getItem(`Level3Screen`);
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
      const jsonData = await AsyncStorage.getItem(`Level4Screen`);
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
      const jsonData = await AsyncStorage.getItem(`Level5Screen`);
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
      const jsonData = await AsyncStorage.getItem(`Level6Screen`);
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
      const jsonData = await AsyncStorage.getItem(`Level7Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLock8lvl(parsedData.passteLevel);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getAboute9LvlData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level8Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLock9lvl(parsedData.passteLevel);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getAboute10LvlData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level9Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLock10lvl(parsedData.passteLevel);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const GoBack = () => {
    navigation.goBack();
  };

  const NavToLevl = title => {
    navigation.navigate(`Level${title}Screen`);
  };
  return (
    <Layaut>
      <View style={styles.conteiner}>
        <View style={styles.levelsConteiner}>
          {/**Levels Btn */}
          <LavelsBtn
            castomeStylesText={{color: lock1lvl ? '#c1dfde' : 'grey'}}
            unlock={lock1lvl}
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="1"
            foo={() => {
              NavToLevl(1);
            }}
          />
          <LavelsBtn
            castomeStylesText={{color: lock2lvl ? '#c1dfde' : 'grey'}}
            unlock={lock2lvl}
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="2"
            foo={() => {
              NavToLevl(2);
            }}
          />
          <LavelsBtn
            castomeStylesText={{color: lock3lvl ? '#c1dfde' : 'grey'}}
            unlock={lock3lvl}
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="3"
            foo={() => {
              NavToLevl(3);
            }}
          />
          <LavelsBtn
            castomeStylesText={{color: lock4lvl ? '#c1dfde' : 'grey'}}
            unlock={lock4lvl}
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="4"
            foo={() => {
              NavToLevl(4);
            }}
          />
          <LavelsBtn
            castomeStylesText={{color: lock5lvl ? '#c1dfde' : 'grey'}}
            unlock={lock5lvl}
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="5"
            foo={() => {
              NavToLevl(5);
            }}
          />
          <LavelsBtn
            castomeStylesText={{color: lock6lvl ? '#c1dfde' : 'grey'}}
            unlock={lock6lvl}
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="6"
            foo={() => {
              NavToLevl(6);
            }}
          />
          <LavelsBtn
            castomeStylesText={{color: lock7lvl ? '#c1dfde' : 'grey'}}
            unlock={lock7lvl}
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="7"
            foo={() => {
              NavToLevl(7);
            }}
          />
          <LavelsBtn
            castomeStylesText={{color: lock8lvl ? '#c1dfde' : 'grey'}}
            unlock={lock8lvl}
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="8"
            foo={() => {
              NavToLevl(8);
            }}
          />
          <LavelsBtn
            castomeStylesText={{color: lock9lvl ? '#c1dfde' : 'grey'}}
            unlock={lock9lvl}
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="9"
            foo={() => {
              NavToLevl(9);
            }}
          />
          <LavelsBtn
            castomeStylesText={{
              color: lock10lvl ? '#c1dfde' : 'grey',
              fontSize: 35,
            }}
            unlock={lock10lvl}
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="10"
            foo={() => {
              NavToLevl(10);
            }}
          />
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  castomeStyles: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
  castomeLevelsBtnStyles: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    marginRight: 10,
  },
});

export default ExplorerLevelScreen;
