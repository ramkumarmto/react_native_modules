import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import QRCode from 'react-native-qrcode-svg';

const QRCodeComp = () => {
    let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
const username = "Ram Kumar";
const bill = "$120"
  return (
    <View style={styles.container}>
      {/* <Text>QRCodeComp</Text> */}
    {/* <QRCode
      value="http://awesome.link.qr"
    /> */}


<QRCode
      value= {`username : ${username} 
               bill : ${bill}`}
      logo={{uri: base64Logo}}
      logoSize={30}
      logoBackgroundColor='transparent'
      color='black'
    />
    
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        height : 500
    }
})

export default QRCodeComp