
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native'
import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Button } from 'react-native-paper';

const GeolocationComp = () => {

  const geolocationHandler = async()=>{

  try{
   const granted =  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,   {
      title: 'Cool Photo App Camera Permission',
      message:
        'Cool Photo App needs access to your camera ' +
        'so you can take awesome pictures.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    })
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
      Geolocation.getCurrentPosition(info => console.log(info));
    } else {
      console.log('Camera permission denied');
    }


  } catch(err){
    console.log("ERROR", err)
  }

  }
  return (
    <View  style={styles.container}>
      <Text>Geolocation</Text>
      <Button mode='contained' onPress={geolocationHandler}>
        Find Geolocation
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : "center",
    // backgroundColor : "tomato",
    height : 600
  }
})
export default GeolocationComp;