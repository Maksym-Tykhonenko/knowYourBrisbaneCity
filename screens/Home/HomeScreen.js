import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, AppState} from 'react-native';
import Layaut from '../../components/Layaut';
import LinearGradient from 'react-native-linear-gradient';
import DailyBonusModal from '../../components/DailyBonusModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  playBackgroundMusic,
  resetPlayer,
} from '../../components/soundSystem/setupPlayer';

const HomeScreen = ({navigation}) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [points, setPoints] = useState(0);
  console.log('points==>', points);
  const [vibroStatus, setVibroStatus] = useState(true);
  console.log('vibroStatusHome==>', vibroStatus);

  //////////////Music
  useEffect(() => {
    const initializePlayer = async () => {
      try {
        await playBackgroundMusic();
      } catch (error) {
        console.error('Error initializing player:', error);
      }
    };

    initializePlayer();

    return () => {
      // Clean up player when the component unmounts
      resetPlayer();
    };
  }, []);
  /////////////////////////////////////////////////////

  useEffect(() => {
    getData(); // Завантаження даних при першому завантаженні
    checkAndAddDailyBonus(); // Перевірка щоденного бонусу
    getVibrationData();
  }, []);

  useEffect(() => {
    setData(); // Оновлення даних при зміні балів
  }, [points]);

  const setData = async () => {
    try {
      const data = {
        points,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('Points', jsonData);
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Points');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        setPoints(parsedData.points);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getVibrationData = async () => {
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

  const checkAndAddDailyBonus = async () => {
    try {
      const today = new Date().toDateString(); // Отримуємо поточну дату у форматі 'Mon Oct 23 2024'
      const lastLoginDate = await AsyncStorage.getItem('lastLoginDate');
      const pointsData = await AsyncStorage.getItem('Points');
      let currentPoints = pointsData ? JSON.parse(pointsData).points : 0;

      // Перевіряємо, чи відрізняється поточна дата від останньої дати входу
      if (lastLoginDate !== today) {
        // Оновлюємо бали та показуємо модальне вікно
        currentPoints += 100;
        setPoints(currentPoints);
        setModalStatus(true); // Показуємо модальне вікно з бонусом

        // Зберігаємо нову кількість балів та дату
        await AsyncStorage.setItem('lastLoginDate', today);
        const updatedPointsData = JSON.stringify({points: currentPoints});
        await AsyncStorage.setItem('Points', updatedPointsData);

        console.log('Ви отримали 100 бонусних балів за щоденний вхід!');
      } else {
        console.log('Ви вже отримали бонус за сьогодні.');
      }
    } catch (e) {
      console.log('Помилка при нарахуванні бонусів:', e);
    }
  };

  const DailyBonusOperation = () => {
    setModalStatus(false); // Закриваємо модальне вікно після підтвердження
  };

  return (
    <Layaut>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('GameScreen');
          }}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // градієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('ResultScreen');
          }}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // градієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>Result</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AbouteScreen');
          }}
          style={styles.btn}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // градієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>About</Text>
          </LinearGradient>
        </TouchableOpacity>

        <DailyBonusModal modalStatus={modalStatus} foo={DailyBonusOperation} />
      </View>
    </Layaut>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 270,
    height: 70,
    borderWidth: 3,
    borderColor: '#fbc02e',
    borderRadius: 30,
    //backgroundColor: '#fbc02e',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  btnLinearGradient: {
    width: 270,
    height: 70,
    borderWidth: 3,
    borderColor: '#fbc02e',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 25,
    fontFamily: 'PlaywriteGBS-Italic',
    color: '#fbc02e',
  },
});

export default HomeScreen;
// PlaywriteGBS-LightItalic
// PlaywriteGBS-Regular
// PlaywriteGBS-Italic
