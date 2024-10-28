import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, AppState} from 'react-native';
import Layaut from '../../components/Layaut';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from '../../components/OperationBtn';

const PersonalScheduleScreen = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };

  const OpenAddFolderModalHandler = () => {
    //setOpenAddFolderModal(!openAddFolderModal);
  };

  return (
    <Layaut>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <OperationBtn
          castomeStyles={styles.castomeStylesAddFolder}
          title=" Add "
          foo={OpenAddFolderModalHandler}
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
});

export default PersonalScheduleScreen;
