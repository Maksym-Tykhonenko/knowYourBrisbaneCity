import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Layaut from '../../../components/Layaut';
import {lvl1} from '../../../data/Explorer/lvl1';
import OperationBtn from '../../../components/OperationBtn';

const Level2Screen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSelection = selectedAnswer => {
    const currentQuestion = lvl1[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Якщо відповідь правильна, перейти до наступного питання
      if (currentQuestionIndex < lvl1.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        Alert.alert('Вітаємо!', 'Ви пройшли рівень.');
        navigation.goBack(); // Повернутися назад після проходження всіх питань
      }
    } else {
      // Якщо відповідь неправильна, показати алерт
      Alert.alert('Невірна відповідь', 'Спробуйте ще раз.');
    }
  };

  const currentQuestion = lvl1[currentQuestionIndex];

  const GoBack = () => {
    navigation.goBack();
  };

  return (
    <Layaut>
      <View style={styles.conteiner}>
        <Text style={styles.qwestion}>{currentQuestion.question}</Text>
        {currentQuestion.answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={styles.btn}
            onPress={() => handleAnswerSelection(answer)}>
            <Text style={styles.btnText}>{answer}</Text>
          </TouchableOpacity>
        ))}

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

export default Level2Screen;
