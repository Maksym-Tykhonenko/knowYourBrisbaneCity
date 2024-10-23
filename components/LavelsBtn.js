import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LavelsBtn = ({
  children,
  castomeStyles,
  title,
  foo,
  unlock,
  castomeStylesText,
}) => {
  console.log('castomeStyles==>', castomeStyles);
  return (
    <TouchableOpacity
      disabled={!unlock}
      style={[styles.btn, castomeStyles]}
      onPress={() => {
        foo();
      }}>
      <LinearGradient
        colors={['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)']} // гра��ієнт від синього до червоного
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.btnLinearGradient}>
        <Text style={[styles.btnText, castomeStylesText]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 70,
    borderWidth: 3,
    borderColor: '#fbc02e',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
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
    fontSize: 45,
    fontFamily: 'PlaywriteGBS-Italic',
    //color: '#fbc02e',
  },
});

export default LavelsBtn;
