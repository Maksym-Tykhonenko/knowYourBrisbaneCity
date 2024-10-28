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
import {lvl7} from '../../../data/Explorer/lvl7';
import OperationBtn from '../../../components/OperationBtn';
import CongratModal from '../../../components/CongratModal';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';

const Level7Screen = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [heart, setHeart] = useState(3);
  const [points, setPoints] = useState(0);
  const [help, setHelp] = useState(3);
  const [congrModalIsVisible, setCongrModalIsVisible] = useState(false);
  console.log('congrModalIsVisible==>', congrModalIsVisible);
  const [availableAnswers, setAvailableAnswers] = useState(
    lvl7[currentQuestionIndex].answers,
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
      await AsyncStorage.setItem(`Level7Screen`, jsonData);
      //console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getCompliteData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level7Screen`);
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

    const currentQuestion = lvl7[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Якщо відповідь правильна, перейти до наступного питання
      setPoints(prevPoints => prevPoints + 10);
      if (currentQuestionIndex < lvl7.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAvailableAnswers(lvl7[currentQuestionIndex + 1].answers); // Оновити варіанти відповідей
      } else {
        //Alert.alert('Вітаємо!', 'Ви пройшли рівень.', [
        //  {
        //    text: 'OK',
        //    onPress: () => navigation.navigate('GameScreen'), // Змінити 'Home' на потрібний екран
        //  },
        //]);
        setCongrModalIsVisible(true);
        setPassteLevel(true);
      }
    } else {
      // Якщо відповідь неправильна, відняти одне життя
      setHeart(prevHeart => {
        if (prevHeart - 1 < 1) {
          Alert.alert('Game Over', 'Ваші життя закінчилися.', [
            {
              text: 'OK',
              onPress: () => navigation.navigate('GameScreen'), // Змінити 'Home' на потрібний екран
            },
          ]);
          //setCongrModalIsVisible(true);
          return 0; // Встановити життя на 0
        } else {
          Alert.alert('Невірна відповідь', 'Спробуйте ще раз.');
          return prevHeart - 1;
        }
      });
    }
  };

  const useHelp = () => {
    if (help > 0) {
      // Використати допомогу, зменшити кількість варіантів відповіді
      const currentQuestion = lvl7[currentQuestionIndex];
      const incorrectAnswers = currentQuestion.answers.filter(
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
      Alert.alert('У вас більше немає доступних допомог.');
    }
  };

  const currentQuestion = lvl7[currentQuestionIndex];

  const GoBack = () => {
    navigation.navigate('GameScreen');
  };

  const GoToNext = () => {
    navigation.navigate('Level8Screen');
    setCongrModalIsVisible(false);
  };

  return (
    <Layaut>
      <View style={styles.conteiner}>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.qwestion}>Events in Brisbane</Text>
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
              {currentQuestion.question}
            </Text>
            {availableAnswers.map((answer, index) => (
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
  },
  castomeStyles: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
  btn: {
    height: 70,
    borderWidth: 3,
    borderColor: '#fbc02e',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    width: '80%',
  },
  btnLinearGradient: {
    paddingHorizontal: 20,
    height: '100%',
    width: '100%',
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

export default Level7Screen;
