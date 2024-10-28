import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Layaut from '../../components/Layaut';
import MapView, {Marker} from 'react-native-maps';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import OperationBtn from '../../components/OperationBtn';
import Entypo from 'react-native-vector-icons/Entypo';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: -27.46830116524425,
    longitude: 153.0398365789649,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const zoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    });
  };

  const zoomOut = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  };
  return (
    <Layaut>
      <View
        style={{
          flex: 1,
        }}>
        <View style={{marginTop: 30, marginHorizontal: 20, marginBottom: 10}}>
          <Text style={styles.title}>Map:</Text>
          <MapView
            style={styles.rootContainer}
            region={region}
            //</View>onRegionChangeComplete={region => setRegion(region)}
          >
            <Marker
              coordinate={{
                latitude: 40.43261048474823,
                longitude: -3.6932816022259702,
              }}
            />
          </MapView>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <OperationBtn
          title={<Entypo name="minus" style={{fontSize: 40}} />}
          castomeStyles={{position: 'absolute', bottom: 5, left: 5}}
          foo={zoomOut}
        />
        <OperationBtn
          title={<Entypo name="plus" style={{fontSize: 40}} />}
          castomeStyles={{position: 'absolute', bottom: 5, right: 5}}
          foo={zoomIn}
        />
      </View>
    </Layaut>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    height: 1,
    height: windowHeight * 0.68,
    marginHorizontal: 10,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#fbc02e',
  },
  title: {
    fontSize: 40,
    color: '#fbc02e',
    fontFamily: 'PlaywriteGBS-Italic',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonsContainer: {marginBottom: 60},
});

export default MapScreen;
