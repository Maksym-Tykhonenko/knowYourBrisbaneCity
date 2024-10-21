import React from 'react';
import {View, ImageBackground} from 'react-native';

const Layaut = ({children}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/back.webp')}
        style={{flex: 1, resizeMode: 'cover'}}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Layaut;
