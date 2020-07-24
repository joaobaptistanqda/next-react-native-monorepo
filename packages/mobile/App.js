import { Image, PermissionsAndroid, Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useConsole } from '@mono/hooks';
import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [location, setLocation] = useState({});

  useConsole(`React native ${Platform.OS}`);

  const getPos = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          buttonPositive: 'sim',
          message: 'quero permição',
          title: 'loc permi'
        }
      );
    }

    Geolocation.getCurrentPosition(
      pos => {
        console.log(`Pos: ${JSON.stringify(pos, null, 2)} in ${Platform.OS}`);
        setLocation(pos);
      },
      err => console.log(`Err: ${err}, in ${Platform.OS}`)
    );
  };

  useEffect(() => {
    getPos();
  }, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'}/>
      <SafeAreaView>
        <View>
          <Text>Olá</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}
            style={{
              height: 50,
              width: 50
            }}
          />
          <Image source={require('./logo_placeholder.png')}/>
          <Text>{JSON.stringify(location, null, 2)}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
