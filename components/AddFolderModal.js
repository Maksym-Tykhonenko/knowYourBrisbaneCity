import React, {useState, useEffect} from 'react';
import {Text, Modal, View, StyleSheet, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from './OperationBtn';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddFolderModal = ({modalStatus, foo, addFolder}) => {
  const [prevFolderName, setPrevFolderName] = useState('');

  const handleAddFolder = () => {
    if (prevFolderName.trim() !== '') {
      addFolder(prevFolderName); // Передаємо значення в PhotoAlbumScreen
      setPrevFolderName(''); // Очищаємо поле введення
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalStatus}>
      <LinearGradient
        colors={['rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, 1)']} // градієнт від червоного до синього
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradientBackground}>
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...styles.congratText, fontSize: 44}}>
            Please, enter
          </Text>
          <Text style={{...styles.congratText, fontSize: 44, marginBottom: 20}}>
            a folder name
          </Text>

          <TextInput
            placeholder="Folder Name..."
            placeholderTextColor="rgba(255, 215, 0, 0.5)"
            style={styles.TextInputStyles}
            onChangeText={setPrevFolderName}
            value={prevFolderName}
          />

          <OperationBtn title="Add Folder" foo={handleAddFolder} />
        </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
});

export default AddFolderModal;
