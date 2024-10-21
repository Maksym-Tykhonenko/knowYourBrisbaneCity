import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Layaut from '../../components/Layaut';
import OperationBtn from '../../components/OperationBtn';
import LinearGradient from 'react-native-linear-gradient';

const GameScreen = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };
  return (
    <Layaut>
      <View
        style={{
          flex: 1,
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.btn}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // гра��ієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>Explorer Level</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // гра��ієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>Mastermind Level</Text>
          </LinearGradient>
        </TouchableOpacity>

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
  castomeStyles: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
});

export default GameScreen;
