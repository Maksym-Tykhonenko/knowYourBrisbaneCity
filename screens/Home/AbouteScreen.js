import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, AppState} from 'react-native';
import Layaut from '../../components/Layaut';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from '../../components/OperationBtn';

const AbouteScreen = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };
  return (
    <Layaut>
      <View style={styles.subConteiner}>
        <Text style={{color: '#c1dfde', fontSize: 25}}>
          Welcome to Brisbane Quest: Know Your City! Dive into an exciting
          journey through Brisbane, where every corner of the city is filled
          with history, culture, and amazing discoveries! Our app offers unique
          routes, interactive quizzes, and interesting articles to help you
          better understand this incredible city. What Awaits You: - Explore the
          iconic landmarks of Brisbane. - Participate in engaging quizzes and
          test your knowledge. - Learn about local culture and traditions
          through our articles. Get ready to discover Brisbane from a new
          perspective! Start your adventure right now!
        </Text>
      </View>
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
  subConteiner: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    marginTop: 50,
    marginHorizontal: 10,
    padding: 10,
  },
});

export default AbouteScreen;
