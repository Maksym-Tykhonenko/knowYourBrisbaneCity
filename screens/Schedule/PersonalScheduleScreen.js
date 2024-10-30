import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Layaut from '../../components/Layaut';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from '../../components/OperationBtn';
import AddScheduleModal from '../../components/AddScheduleModal';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersonalScheduleScreen = ({navigation}) => {
  const [openAddScheduleModal, setOpenAddScheduleModal] = useState(false);
  const [events, setEvents] = useState([]); // State for storing events

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [events]);

  const setData = async () => {
    try {
      const data = {
        events,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`PersonalScheduleScreen`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`PersonalScheduleScreen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setEvents(parsedData.events);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const GoBack = () => {
    navigation.goBack();
  };

  const OpenAddScheduleModalHandler = () => {
    setOpenAddScheduleModal(!openAddScheduleModal);
  };

  const addNewEventHandler = newEvent => {
    setEvents([...events, newEvent]); // Add the new event to the list
    setOpenAddScheduleModal(false); // Close the modal after adding the event
  };

  return (
    <Layaut>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1, alignItems: 'center', marginTop: 70}}>
          <ScrollView>
            {events.map((event, index) => (
              <View key={index} style={styles.eventContainer}>
                <Text style={styles.eventTitle}>{event.name}</Text>
                <Text style={styles.eventDate}>{event.date}</Text>
                <Text style={styles.eventDescription}>{event.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <AddScheduleModal
          modalStatus={openAddScheduleModal}
          foo={OpenAddScheduleModalHandler}
          addEvent={addNewEventHandler}
        />

        <OperationBtn
          castomeStyles={styles.castomeStylesAddFolder}
          title="Add"
          foo={OpenAddScheduleModalHandler}
        />

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
  castomeStyles: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
  castomeStylesAddFolder: {
    position: 'absolute',
    bottom: 60,
    left: 10,
  },
  eventContainer: {
    backgroundColor: 'rgba(9, 227, 229, 1)',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: windowWidth * 0.8,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
  },
  eventDescription: {
    fontSize: 12,
  },
});

export default PersonalScheduleScreen;
