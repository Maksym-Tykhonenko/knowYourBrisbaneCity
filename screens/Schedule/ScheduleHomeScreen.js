import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, AppState} from 'react-native';
import Layaut from '../../components/Layaut';
import LinearGradient from 'react-native-linear-gradient';

const ScheduleHomeScreen = ({navigation, route}) => {
  console.log('ScheduleHomeScreen', route);
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
            navigation.navigate('PhotoAlbumScreen');
          }}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // градієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>Photo Album</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('ArticlesScreen');
          }}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // градієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>Articles</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonalScheduleScreen');
          }}
          style={styles.btn}>
          <LinearGradient
            colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // градієнт від синього до червоного
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnLinearGradient}>
            <Text style={styles.btnText}>Personal Schedule</Text>
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

export default ScheduleHomeScreen;
