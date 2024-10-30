import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OperationBtn = ({children, castomeStyles, title, foo}) => {
  //console.log('castomeStyles==>', castomeStyles);
  return (
    <TouchableOpacity
      style={[styles.btn, castomeStyles]}
      onPress={() => {
        foo();
      }}>
      <LinearGradient
        colors={['rgba(29, 182, 37, 1)', 'rgba(9, 227, 229, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.btnLinearGradient}>
        <Text style={styles.btnText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 70,
    borderWidth: 3,
    borderColor: '#c1dfde',
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
    borderColor: '#c1dfde',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 25,
    fontFamily: 'PlaywriteGBS-Italic',
    color: '#c1dfde',
  },
});

export default OperationBtn;
