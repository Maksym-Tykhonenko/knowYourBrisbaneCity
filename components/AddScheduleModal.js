import React, {useState} from 'react';
import {
  Text,
  Modal,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from './OperationBtn';
import {Dimensions} from 'react-native';
import {Calendar} from 'react-native-calendars';

const windowWidth = Dimensions.get('window').width;

const AddScheduleModal = ({modalStatus, foo, addEvent}) => {
  const [artName, setArtName] = useState('');
  const [text, setText] = useState('');
  const [selected, setSelected] = useState('');

  const submitHandler = () => {
    if (artName && text && selected) {
      addEvent({name: artName, description: text, date: selected});
      setArtName('');
      setText('');
      setSelected('');
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalStatus}>
      <LinearGradient
        colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradientBackground}>
        <View style={styles.modalContent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              placeholder="Place..."
              placeholderTextColor="#c1dfde"
              style={styles.TextInputStyles}
              onChangeText={setArtName}
              value={artName}
            />
            <View
              style={{width: '100%', alignItems: 'center', marginBottom: 10}}>
              <Text
                style={{color: '#c1dfde', fontSize: 25, textAlign: 'center'}}>
                Select a date
              </Text>
            </View>

            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedDotColor: 'orange',
                },
              }}
            />

            <TextInput
              placeholder="Add description..."
              placeholderTextColor="#c1dfde"
              style={{
                ...styles.TextInputStyles,
                height: 160,
                borderRadius: 20,
                marginTop: 30,
              }}
              onChangeText={setText}
              value={text}
              multiline={true}
            />

            <View style={{width: '100%', alignItems: 'center'}}>
              <OperationBtn
                castomeStyles={styles.btnCastomStyles}
                title="Submit"
                foo={submitHandler}
              />
            </View>
            <TouchableOpacity
              style={{position: 'absolute', right: 0}}
              onPress={foo}>
              <Text
                style={{
                  color: '#c1dfde',
                  fontSize: 40,
                  fontFamily: 'PlaywriteGBS-Italic',
                }}>
                X
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {alignItems: 'center'},
  gradientBackground: {
    flex: 1,
    alignItems: 'center',
    marginVertical: '30%',
    marginHorizontal: '2%',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#c1dfde',
    shadowColor: '#c1dfde',
    shadowOffset: {width: 30, height: 10},
    shadowRadius: 15,
    shadowOpacity: 0.2,
  },
  TextInputStyles: {
    marginTop: 90,
    height: 60,
    width: windowWidth * 0.7,
    margin: 12,
    marginBottom: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: '#c1dfde',
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
    color: '#c1dfde',
    fontSize: 30,
    fontFamily: 'Starnberg',
  },
  btnCastomStyles: {
    width: 200,
  },
});

export default AddScheduleModal;
