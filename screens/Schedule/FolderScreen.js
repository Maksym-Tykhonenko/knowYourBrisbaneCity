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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';

const FolderScreen = ({navigation, route}) => {
  const [photos, setPhotos] = useState([]);
  console.log('route==>', route.params.folderName);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [photos]);

  const setData = async () => {
    try {
      const data = {
        photos,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(
        `PhotoAlbumScreen${route.params.folderName}`,
        jsonData,
      );
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(
        `PhotoAlbumScreen${route.params.folderName}`,
      );
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setPhotos(parsedData.photos || []); // Якщо дані не знайдені, встановити порожній масив
      } else {
        setPhotos([]); // Встановити порожній масив, якщо дані відсутні
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
      setPhotos([]); // Встановити порожній масив у випадку помилки
    }
  };

  const PhotoPicer = () => {
    let options = {
      storageOptios: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        //console.log('response==>', response.assets[0].uri);
        setPhotos([...photos, response.assets[0].uri]);
      } else {
        console.log('Вибір скасовано');
      }
    });
  };

  const GoBack = () => {
    navigation.goBack();
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
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              width: windowWidth,
            }}>
            {photos &&
              photos.map(photo => {
                return (
                  <TouchableOpacity
                    key={photo}
                    style={{
                      width: windowWidth * 0.45,
                      height: windowWidth * 0.45,
                      margin: 10,
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: '#fbc02e',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: photo}}
                      style={{width: '100%', height: '100%', borderRadius: 20}}
                    />
                  </TouchableOpacity>
                );
              })}
          </View>
          <View style={{height: 150}}></View>
        </ScrollView>

        <OperationBtn
          castomeStyles={styles.castomeStylesAddFolder}
          title=" Add "
          foo={PhotoPicer}
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
  castomeStylesAddFolder: {
    position: 'absolute',
    bottom: 60,
    left: 10,
  },
  castomeStyles: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
});

export default FolderScreen;
