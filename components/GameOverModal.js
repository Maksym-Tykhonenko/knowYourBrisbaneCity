import React from 'react';
import {Text, Modal, View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from './OperationBtn';

const GameOverModal = ({modalStatus, foo}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalStatus}>
      <LinearGradient
        colors={['rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, 1)']} // градієнт від червоного до синього
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradientBackground}>
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...styles.congratText, marginBottom: 20}}>
            Game Over
          </Text>

          <Text style={{...styles.congratText, fontSize: 44, marginBottom: 20}}>
            Try againe !!!
          </Text>

          <OperationBtn title="NEXT" foo={foo} />
        </View>
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
    borderColor: '#fbc02e',
    shadowColor: '#fbc02e',
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
    color: '#fbc02e',
    textAlign: 'center',
    fontFamily: 'PlaywriteGBS-Italic',
  },
});

export default GameOverModal;