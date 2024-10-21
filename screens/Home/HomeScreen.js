import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Layaut from '../../components/Layaut';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  return (
    <Layaut>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('GameScreen');
          }}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // градієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // градієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>Result</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // градієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>Aboute</Text>
          </LinearGradient>
        </TouchableOpacity>
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
});
export default HomeScreen;
// PlaywriteGBS-LightItalic
// PlaywriteGBS-Regular
// PlaywriteGBS-Italic
