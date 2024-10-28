import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppState,
  Image,
  ScrollView,
} from 'react-native';
import Layaut from '../../components/Layaut';
import AddFolderModal from '../../components/AddFolderModal';
import OperationBtn from '../../components/OperationBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ArticleDetail = ({navigation, route}) => {
  console.log('route==>', route);

  const GoBack = () => {
    navigation.goBack();
  };
  return (
    <Layaut>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 50,
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
          }}>
          <Text
            style={{
              color: '#fbc02e',
              fontSize: 30,
              fontFamily: 'PlaywriteGBS-Italic',
            }}>
            {route.params.articl.name}
          </Text>
          <Image
            style={{width: windowWidth * 0.9, height: windowWidth * 0.5}}
            source={route.params.articl.photo}
          />
          <Text
            style={{
              color: '#fbc02e',
              fontSize: 20,
              fontFamily: 'PlaywriteGBS-Italic',
              width: windowWidth * 0.9,
            }}>
            {route.params.articl.text}
          </Text>
        </View>
        <View style={{height: 150}}></View>
      </ScrollView>
      <OperationBtn
        castomeStyles={styles.castomeStyles}
        title="Back"
        foo={GoBack}
      />
    </Layaut>
  );
};

const styles = StyleSheet.create({
  castomeStyles: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
});

export default ArticleDetail;
