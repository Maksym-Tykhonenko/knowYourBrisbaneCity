import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Layaut from '../../../components/Layaut';
import {lvl1} from '../../../data/Explorer/lvl1';
import OperationBtn from '../../../components/OperationBtn';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Level1Screen = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [heart, setHeart] = useState(3);
  const [points, setPoints] = useState(0);
  const [help, setHelp] = useState(3);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [availableAnswers, setAvailableAnswers] = useState(
    lvl1[currentQuestionIndex].answers,
  ); // Список варіантів відповідей

  const handleAnswerSelection = selectedAnswer => {
    const currentQuestion = lvl1[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Якщо відповідь правильна, перейти до наступного питання
      setPoints(prevPoints => prevPoints + 10);
      if (currentQuestionIndex < lvl1.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAvailableAnswers(lvl1[currentQuestionIndex + 1].answers); // Оновити варіанти відповідей
      } else {
        Alert.alert('Вітаємо!', 'Ви пройшли рівень.', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('GameScreen'), // Змінити 'Home' на потрібний екран
          },
        ]);
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
          setModalIsVisible(true);
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
      const currentQuestion = lvl1[currentQuestionIndex];
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

  const currentQuestion = lvl1[currentQuestionIndex];

  const GoBack = () => {
    navigation.goBack();
  };

  return (
    <Layaut>
      <View style={styles.conteiner}>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.qwestion}>History of Brisbane</Text>
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
export default Level1Screen;
