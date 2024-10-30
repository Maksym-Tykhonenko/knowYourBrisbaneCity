import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Layaut from '../../components/Layaut';
import LinearGradient from 'react-native-linear-gradient';
import OperationBtn from '../../components/OperationBtn';
import AddArticleModal from '../../components/AddArticleModal';
import {articles} from '../../data/articles';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';

const ArticlesScreen = ({navigation}) => {
  const [openAddArticlesModal, setOpenAddArticlesModal] = useState(false);
  //console.log('openAddArticlesModal==>', openAddArticlesModal);
  const [newArticles, setNewArticles] = useState([]);
  console.log('newArticles==>', newArticles);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [newArticles]);

  const setData = async () => {
    try {
      const data = {
        newArticles,
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
        setNewArticles(parsedData.newArticles || []); // Якщо дані не знайдені, встановити порожній масив
      } else {
        setNewArticles([]); // Встановити порожній масив, якщо дані відсутні
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
      setNewArticles([]); // Встановити порожній масив у випадку помилки
    }
  };

  const OpenAddArticlesModalHandler = () => {
    setOpenAddArticlesModal(!openAddArticlesModal);
  };

  const GoBack = () => {
    navigation.goBack();
  };

  const addNewArticleHandler = article => {
    setNewArticles([...newArticles, article]);
    setOpenAddArticlesModal(false); // Close the modal after adding the article
  };

  return (
    <Layaut>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: windowWidth, marginTop: 50}}>
          <ScrollView>
            <View
              style={{
                width: windowWidth,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}>
              {newArticles &&
                newArticles.map(articl => {
                  return (
                    <TouchableOpacity
                      key={articl.id}
                      style={{
                        width: windowWidth * 0.45,
                        height: windowWidth * 0.45,
                        marginBottom: 20,
                        marginLeft: 10,
                        marginTop: 20,
                        alignItems: 'center',
                        borderRadius: 10,
                      }}
                      onPress={() =>
                        navigation.navigate('NewArticleDetail', {articl})
                      }>
                      <Text
                        style={{
                          color: '#c1dfde',
                          fontSize: 18,
                          fontFamily: 'PlaywriteGBS-Italic',
                        }}>
                        {articl.name}
                      </Text>

                      <Image
                        source={{uri: articl.img}}
                        style={{
                          width: '100%',
                          height: windowWidth * 0.4,
                          borderRadius: 10,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}

              {articles.map(articl => {
                return (
                  <TouchableOpacity
                    key={articl.name}
                    style={{
                      width: windowWidth * 0.45,
                      height: windowWidth * 0.45,
                      marginBottom: 20,
                      marginLeft: 10,
                      marginTop: 20,
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                    onPress={() =>
                      navigation.navigate('ArticleDetail', {articl})
                    }>
                    <Text
                      style={{
                        color: '#c1dfde',
                        fontSize: 18,
                        fontFamily: 'PlaywriteGBS-Italic',
                      }}>
                      {articl.name}
                    </Text>

                    <Image
                      source={articl.photo}
                      style={{
                        width: '100%',
                        height: windowWidth * 0.4,
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={{height: 200}}></View>
          </ScrollView>
        </View>

        <AddArticleModal
          modalStatus={openAddArticlesModal}
          foo={OpenAddArticlesModalHandler}
          addArticle={addNewArticleHandler} // Pass the handler function
        />
        <OperationBtn
          castomeStyles={styles.castomeStylesAddArticles}
          title=" Add "
          foo={OpenAddArticlesModalHandler}
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
  castomeStylesAddArticles: {
    position: 'absolute',
    bottom: 60,
    left: 10,
  },
});

export default ArticlesScreen;
