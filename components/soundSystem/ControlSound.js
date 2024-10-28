import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {State, usePlaybackState} from 'react-native-track-player';
import {toggleBackgroundMusic} from './setupPlayer';
import Entypo from 'react-native-vector-icons/Entypo';

const ControlSound = () => {
  const [melody, setMelody] = useState(false);
  const playbackState = usePlaybackState();
  const isPlaying = playbackState === State.Playing;

  const handleToggleSound = async () => {
    await toggleBackgroundMusic();
    setMelody(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleSound}>
        {melody ? (
          <Image
            style={{
              width: 50,
              height: 50,
              color: '#fbc02e',
            }}
            active={melody}
            source={require('../../assets/stop-button.png')}
          />
        ) : (
          <Image
            style={{
              width: 50,
              height: 50,
              color: '#fbc02e',
            }}
            active={melody}
            source={require('../../assets/play-button.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ControlSound;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
  },
});
