import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Vibration,
} from 'react-native';
import Layaut from '../../../components/Layaut';
import {lvl3Mastermind} from '../../../data/Mastermind/lvl3Mastermind';
import {lvl1} from '../../../data/Explorer/lvl1';
import OperationBtn from '../../../components/OperationBtn';
import CongratModal from '../../../components/CongratModal';
import GameOverModal from '../../../components/GameOverModal';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';

const MastLevel3Screen = ({navigation, route}) => {
  console.log('route==>', route);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [heart, setHeart] = useState(3);
  const [points, setPoints] = useState(0);
  //console.log('points==>', points);
  const [help, setHelp] = useState(3);
  const [congrModalIsVisible, setCongrModalIsVisible] = useState(false);
  //console.log('congrModalIsVisible==>', congrModalIsVisible);
  const [gameOverModalIsVisible, setgameOverModalIsVisible] = useState(false);
  const [availableAnswers, setAvailableAnswers] = useState(
    lvl3Mastermind[currentQuestionIndex].awnsers,
  ); // Список варіантів відповідей
  const [passteLevel, setPassteLevel] = useState(false);
  console.log('passteLevel==>', passteLevel);
  const [vibroStatus, setVibroStatus] = useState(false);
  console.log('vibroStatus==>', vibroStatus);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [points]);

  const setData = async () => {
    try {
      const data = {
        points,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`Points`, jsonData);
      //console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Points`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setPoints(parsedData.points);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  /////////////////////////////////////
  useEffect(() => {
    getCompliteData();
    getVibrationData();
  }, []);

  useEffect(() => {
    setCompliteData();
  }, [passteLevel]);

  const setCompliteData = async () => {
    try {
      const data = {
        passteLevel,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`LevelMastermind3Screen`, jsonData);
      //console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getCompliteData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`LevelMastermind3Screen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setPassteLevel(parsedData.passteLevel);
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

  const handleAnswerSelection = selectedAnswer => {
    // Викликаємо вібрацію, якщо вона увімкнена
    if (vibroStatus) {
      Vibration.vibrate(100); // Вібрація на 100 мілісекунд
    }

    const currentQuestion = lvl3Mastermind[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Якщо відповідь правильна, перейти до наступного питання
      setPoints(prevPoints => prevPoints + 10);
      if (currentQuestionIndex < lvl3Mastermind.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAvailableAnswers(lvl3Mastermind[currentQuestionIndex + 1].awnsers); // Оновити варіанти відповідей
      } else {
        setCongrModalIsVisible(true);
        setPassteLevel(true);
      }
    } else {
      // Якщо відповідь неправильна, відняти одне життя
      setHeart(prevHeart => {
        if (prevHeart - 1 < 1) {
          setgameOverModalIsVisible(true);
          return 0; // Встановити життя на 0
        } else {
          Alert.alert('Wrong answer', `Try again. ${heart - 1} lives left`);
          return prevHeart - 1;
        }
      });
    }
  };

  const useHelp = () => {
    if (help > 0) {
      // Використати допомогу, зменшити кількість варіантів відповіді
      const currentQuestion = lvl3Mastermind[currentQuestionIndex];
      const incorrectAnswers = currentQuestion.awnsers.filter(
        answer => answer !== currentQuestion.correctAnswer,
      );
      const answerToRemove =
        incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];

      // Оновити список доступних відповідей, видаливши один з неправильних варіантів
      setAvailableAnswers(prevAnswers =>
        prevAnswers.filter(answer => answer !== answerToRemove),
      );
      // Зменшити кількість доступних допомог
      setHelp(prevHelp => prevHelp - 1);
    } else {
      Alert.alert('You no longer have benefits available.');
    }
  };

  const currentQuestion = lvl3Mastermind[currentQuestionIndex];

  const GoBack = () => {
    navigation.goBack();
  };

  const GoToNext = () => {
    navigation.navigate('MastLevel4Screen');
    setCongrModalIsVisible(false);
  };

  const GameOver = () => {
    navigation.navigate('GameScreen');
    setCongrModalIsVisible(false);
  };

  return (
    <Layaut>
      <View style={styles.conteiner}>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.qwestion}>Brisbane’s Food Scene</Text>
            <View
              style={{
                width: windowWidth,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'baseline',
                justifyContent: 'space-around',
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{height: 60, width: 60}}
                  source={require('../../../assets/heart.png')}
                />
                <Text style={{color: '#fbc02e', fontSize: 20}}>{heart}</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{height: 70, width: 70}}
                  source={require('../../../assets/reward.png')}
                />
                <Text style={{color: '#fbc02e', fontSize: 20}}>{points}</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={useHelp}>
                  <Image
                    style={{height: 70, width: 70}}
                    source={require('../../../assets/idea.png')}
                  />
                </TouchableOpacity>
                <Text style={{color: '#fbc02e', fontSize: 20}}>{help}</Text>
              </View>
            </View>
            <Text style={{...styles.qwestion, fontSize: 30}}>
              {currentQuestion.qwest}
            </Text>
            {availableAnswers &&
              availableAnswers.length > 0 &&
              availableAnswers.map((answer, index) => (
                <TouchableOpacity
                  style={{
                    width: windowWidth * 0.8,
                    height: 60,
                    borderWidth: 3,
                    borderRadius: 15,
                    borderColor: '#fbc02e',
                    backgroundColor: 'rgba(0, 0, 255, 0.4)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                  key={index}
                  onPress={() => handleAnswerSelection(answer)}>
                  <Text
                    style={{
                      color: '#fbc02e',
                      fontSize: 20,
                    }}>
                    {answer}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
          <View style={{height: 200}}></View>
        </ScrollView>

        {/**Btn Back */}
        <OperationBtn
          castomeStyles={styles.castomeStyles}
          title="Back"
          foo={GoBack}
        />

        <CongratModal modalStatus={congrModalIsVisible} foo={GoToNext} />
        <GameOverModal modalStatus={gameOverModalIsVisible} foo={GameOver} />
      </View>
    </Layaut>
  );
};

const styles = StyleSheet.create({
  conteiner: {flex: 1, alignItems: 'center', marginTop: 50},
  qwestion: {
    fontSize: 40,
    fontFamily: 'PlaywriteGBS-Italic',
    color: '#fbc02e',
    textAlign: 'center',
    marginBottom: 20,
  },
  castomeStyles: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
});

export default MastLevel3Screen;
