import React, {useState, useEffect} from 'react';
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import Layaut from '../../components/Layaut';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';
import OperationBtn from '../../components/OperationBtn';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ProfileScreen = ({navigation}) => {
  const [prevName, setPrevName] = useState('');
  const [name, setName] = useState('');
  const [selectAvatar, setSelectAvatar] = useState(null);
  console.log('selectAvatar==>', selectAvatar);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [selectAvatar, name]);

  const setData = async () => {
    try {
      const data = {
        selectAvatar,
        name,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`ProfileScreen`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`ProfileScreen`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setName(parsedData.name);
        setSelectAvatar(parsedData.selectAvatar);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const SaveName = () => {
    setName(prevName);
    setPrevName('');
  };

  const ResetData = () => {
    setName('');
    setSelectAvatar(null);
  };

  const SelectAvatarPicer = () => {
    let options = {
      storageOptios: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        //console.log('response==>', response.assets[0].uri);
        setSelectAvatar(response.assets[0].uri);
      } else {
        console.log('Вибір скасовано');
      }
    });
  };

  return (
    <Layaut>
      <View style={styles.container}>
        {/**Avatar Conteiner */}
        <View style={styles.avatarConteiner}>
          <TouchableOpacity
            style={{
              ...styles.avatarBtn,
              borderWidth: selectAvatar && 3,
              borderColor: '#c1dfde',
            }}
            onPress={() => {
              SelectAvatarPicer();
            }}>
            {!selectAvatar ? (
              <Image
                style={styles.image}
                source={require('../../assets/rocker.png')}
              />
            ) : (
              <Image style={styles.image} source={{uri: selectAvatar}} />
            )}
          </TouchableOpacity>
        </View>

        {/**User Name Conteiner */}
        <View style={styles.userNameConteiner}>
          {name ? (
            <Text style={styles.userNameText}>{name}</Text>
          ) : (
            <View style={{alignItems: 'center'}}>
              <TextInput
                placeholder="User Name..."
                placeholderTextColor="#c1dfde"
                style={styles.TextInputStyles}
                onChangeText={setPrevName}
                value={prevName}
              />

              <OperationBtn
                title="Save"
                foo={SaveName}
                castomeStyles={styles.castomeStyles}
              />
            </View>
          )}
        </View>
        {name && (
          <OperationBtn
            title="Reset"
            foo={ResetData}
            castomeStyles={styles.castomeStylesReset}
          />
        )}
      </View>
    </Layaut>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatarConteiner: {
    marginTop: 50,
  },
  avatarBtn: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.48,
    height: windowWidth * 0.48,
    borderRadius: 150,
  },
  userNameConteiner: {marginTop: 20, alignItems: 'center'},
  userNameText: {
    fontSize: 40,
    color: '#c1dfde',
    fontFamily: 'PlaywriteGBS-Italic',
  },
  TextInputStyles: {
    height: 60,
    width: windowWidth * 0.9,
    margin: 12,
    padding: 10,
    borderWidth: 3,
    borderColor: '#c1dfde',
    borderRadius: 50,
    backgroundColor: 'rgba(9, 227, 229, 0.5)',
    color: '#c1dfde',
    fontSize: 30,
    fontFamily: 'Starnberg',
  },
  castomeStyles: {width: 150},
  castomeStylesReset: {
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
});

export default ProfileScreen;
