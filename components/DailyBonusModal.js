import React from 'react';
import {
  Text,
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from './OperationBtn';

const DailyBonusModal = ({modalStatus, foo}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalStatus}>
      <LinearGradient
        colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']} // градієнт від червоного до синього
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradientBackground}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/** 
          <Text style={{...styles.congratText, marginBottom: 20}}>
            Congrat !!!
          </Text>*/}

            <Text
              style={{...styles.congratText, fontSize: 44, marginBottom: 10}}>
              You can collect your daily bonus!
            </Text>
            <Text style={{...styles.congratText, fontSize: 44}}>+ 100</Text>
            <Text
              style={{...styles.congratText, fontSize: 44, marginBottom: 10}}>
              every day
            </Text>
            <Image
              style={{width: 250, height: 250, marginBottom: 10}}
              source={require('../assets/dailyBonus.png')}
            />

            <OperationBtn title="OK" foo={foo} />
          </View>
          <View style={{height: 200}}></View>
        </ScrollView>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%',
    marginHorizontal: '2%',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#c1dfde',
    shadowColor: '#c1dfde',
    shadowOffset: {width: 30, height: 10},
    shadowRadius: 15,
    shadowOpacity: 0.2,
  },
  btnModal: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#c1dfde',
    textAlign: 'center',
    fontFamily: 'PlaywriteGBS-Italic',
  },
});

export default DailyBonusModal;
