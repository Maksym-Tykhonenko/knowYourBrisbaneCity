import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Layaut from '../../components/Layaut';
import {resultData} from '../../data/resultData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OperationBtn from '../../components/OperationBtn';

const ResultScreen = ({navigation}) => {
  const [points, setPoints] = useState(0);
  const [sortedResults, setSortedResults] = useState([]);
  const [name, setName] = useState('');
  console.log('name==>', name);

  useEffect(() => {
    getData(); // Завантаження даних при першому завантаженні
    getNameData();
  }, []);

  useEffect(() => {
    updateResults(); // Оновлення результатів при зміні балів
  }, [points]);

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

  const getNameData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('ProfileScreen');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        setName(parsedData.name);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const updateResults = () => {
    // Додаємо користувача з його поточними балами
    const userResult = {
      id: resultData.length + 1,
      name: name ? `${name}` : 'I am',
      score: points.toString(),
    };

    // Створюємо новий масив з доданим користувачем
    const updatedResults = [...resultData, userResult];

    // Сортуємо масив за спаданням кількості очок
    updatedResults.sort((a, b) => parseInt(b.score) - parseInt(a.score));

    // Оновлюємо стан sortedResults
    setSortedResults(updatedResults);
  };

  const GoBack = () => {
    navigation.goBack();
  };

  return (
    <Layaut>
      <View style={styles.conteiner}>
        <Text style={styles.title}>Result</Text>
        <View style={styles.subConteiner}>
          <ScrollView style={styles.scrollContainer}>
            {sortedResults.map((item, index) => (
              <View key={item.id} style={styles.resultItem}>
                <Text style={styles.rank}>{index + 1}.</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.score}>{item.score} points</Text>
              </View>
            ))}
            <View style={{height: 50}}></View>
          </ScrollView>
        </View>
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
  conteiner: {paddingTop: 40, flex: 1},
  subConteiner: {backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: 20},
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#c1dfde',
    fontFamily: 'PlaywriteGBS-Italic',
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c1dfde',
  },
  name: {
    fontSize: 18,
    color: '#c1dfde',
    fontFamily: 'PlaywriteGBS-Italic',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c1dfde',
  },
  castomeStyles: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
});

export default ResultScreen;
