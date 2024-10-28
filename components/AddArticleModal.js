import React, {useState, useEffect} from 'react';
import {
  Text,
  Modal,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from './OperationBtn';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {uid} from 'uid';

const AddArticleModal = ({modalStatus, foo, addArticle}) => {
  const [artName, setArtName] = useState('');
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const selectImgPicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        setImg(response.assets[0].uri);
      } else {
        console.log('Selection canceled');
      }
    });
  };

  const submitHandler = () => {
    if (artName && text && img) {
      addArticle({name: artName, text, img, id: uid()});
      setArtName('');
      setText('');
      setImg(null);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalStatus}>
      <LinearGradient
        colors={['rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradientBackground}>
        <View style={styles.modalContent}>
          <TextInput
            placeholder="Art Name..."
            placeholderTextColor="rgba(255, 215, 0, 0.5)"
            style={styles.TextInputStyles}
            onChangeText={setArtName}
            value={artName}
          />
          <TextInput
            placeholder="Text..."
            placeholderTextColor="rgba(255, 215, 0, 0.5)"
            style={{...styles.TextInputStyles, marginTop: 10}}
            onChangeText={setText}
            value={text}
          />

          <OperationBtn
            castomeStyles={styles.btnCastomStyles}
            title="Add Image"
            foo={selectImgPicker}
          />

          <OperationBtn
            castomeStyles={styles.btnCastomStyles}
            title="Submit"
            foo={submitHandler}
          />

          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={foo}>
            <Text
              style={{
                color: '#fbc02e',
                fontSize: 40,
                fontFamily: 'PlaywriteGBS-Italic',
              }}>
              X
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {alignItems: 'center'},
  gradientBackground: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '30%',
    marginHorizontal: '2%',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fbc02e',
    shadowColor: '#fbc02e',
    shadowOffset: {width: 30, height: 10},
    shadowRadius: 15,
    shadowOpacity: 0.2,
  },
  btnModal: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#fbc02e',
    textAlign: 'center',
    fontFamily: 'PlaywriteGBS-Italic',
  },
  TextInputStyles: {
    marginTop: 90,
    height: 60,
    width: windowWidth * 0.7,
    margin: 12,
    marginBottom: 30,
    padding: 10,
    borderWidth: 3,
    borderColor: '#fbc02e',
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
    color: '#fbc02e',
    fontSize: 30,
    fontFamily: 'Starnberg',
  },
  btnCastomStyles: {
    width: 200,
  },
});

export default AddArticleModal;
