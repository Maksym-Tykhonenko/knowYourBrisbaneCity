import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Layaut from '../../../components/Layaut';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from '../../../components/OperationBtn';
import LavelsBtn from '../../../components/LavelsBtn';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ExplorerLevelScreen = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };

  const NavToLevl = title => {
    navigation.navigate(`Level${title}Screen`);
  };
  return (
    <Layaut>
      <View style={styles.conteiner}>
        <View style={styles.levelsConteiner}>
          {/**Levels Btn */}
          <LavelsBtn
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="1"
            foo={() => {
              NavToLevl(1);
            }}
          />
          <LavelsBtn
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="2"
            foo={() => {
              NavToLevl(2);
            }}
          />
          <LavelsBtn
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="3"
            foo={() => {
              NavToLevl(3);
            }}
          />
          <LavelsBtn
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="4"
            foo={() => {
              NavToLevl(4);
            }}
          />
          <LavelsBtn
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="5"
            foo={() => {
              NavToLevl(5);
            }}
          />
          <LavelsBtn
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="6"
            foo={() => {
              NavToLevl(6);
            }}
          />
          <LavelsBtn
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="7"
            foo={() => {
              NavToLevl(7);
            }}
          />
          <LavelsBtn
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="8"
            foo={() => {
              NavToLevl(8);
            }}
          />
          <LavelsBtn
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="9"
            foo={() => {
              NavToLevl(9);
            }}
          />
          <LavelsBtn
            castomeStyles={styles.castomeLevelsBtnStyles}
            title="10"
            foo={() => {
              NavToLevl(10);
            }}
          />
        </View>

        {/**Btn Back */}
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
  conteiner: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelsConteiner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  castomeStyles: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
  castomeLevelsBtnStyles: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    marginRight: 10,
  },
});

export default ExplorerLevelScreen;
