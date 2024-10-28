import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppState,
  Image,
} from 'react-native';
import Layaut from '../../components/Layaut';
import AddFolderModal from '../../components/AddFolderModal';
import OperationBtn from '../../components/OperationBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PhotoAlbumScreen = ({navigation}) => {
  const [openAddFolderModal, setOpenAddFolderModal] = useState(false);
  const [folderNames, setFolderNames] = useState([]); // Стан для збереження імен папок
  console.log('folderNames==>', folderNames);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [folderNames]);

  const setData = async () => {
    try {
      const data = {
        folderNames,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`PhotoAlbumScreen`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('PhotoAlbumScreen');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setFolderNames(parsedData.folderNames || []); // Якщо дані не знайдені, встановити порожній масив
      } else {
        setFolderNames([]); // Встановити порожній масив, якщо дані відсутні
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
      setFolderNames([]); // Встановити порожній масив у випадку помилки
    }
  };

  const OpenAddFolderModalHandler = () => {
    setOpenAddFolderModal(!openAddFolderModal);
  };
  const GoBack = () => {
    navigation.goBack();
  };

  const addFolderHandler = folderName => {
    setFolderNames([...folderNames, folderName]);
    setOpenAddFolderModal(false); // Закриваємо модальне вікно після додавання папки
  };

  return (
    <Layaut>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 80,
          //justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            width: '100%',
          }}>
          {folderNames &&
            folderNames.map(folder => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('FolderScreen', {folderName: folder});
                  }}
                  key={folder}
                  style={{marginBottom: 10, marginHorizontal: 15}}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={require('../../assets/favourite-folder.png')}
                  />
                  <Text
                    style={{
                      color: '#fbc02e',
                      fontSize: 20,
                      fontFamily: 'PlaywriteGBS-Italic',
                    }}>
                    {folder}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>

        <AddFolderModal
          modalStatus={openAddFolderModal}
          foo={OpenAddFolderModalHandler}
          addFolder={addFolderHandler} // Передаємо функцію додавання
        />

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

export default PhotoAlbumScreen;
