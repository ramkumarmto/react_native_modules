import { View, Text, PermissionsAndroid, ScrollView, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
// import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Camera = () => {
    const [clickedPhoto, setClickedPhoto] = useState();
    const [ selectedPhoto, setSelectedPhoto] = useState();

    let options = {
        cameraType : "back",
        saveToPhotos : true,
        quality : 0.3,
        mediaType : "photo",
        maxWidth : 200,
        maxHeight : 200,
        includeBase64: true,
        cropping: true,

    }
    const openCameraHandler = async () => {
        //? check for the permission infirst
      try{
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {

            title: 'Test One App Camera Permission',
            message:
                'Test One App needs access to your camera ' +
                'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',

        })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
             const result = await launchCamera(options);
            //  console.log("result", result.assets[0].uri)
            setClickedPhoto(result.assets[0].uri);

            console.log('You can use the camera');
          } else {
            console.log('Camera permission denied');
          }
      }catch(err){
        console.warn(err)
      }
    }
    const openGalleryHandler = async() => {

      try{
        const selectedImg = await launchImageLibrary(options);
        setSelectedPhoto(selectedImg?.assets[0]?.uri);
        // console.log("success", selectedImg.assets[0].uri)
      }catch(err){
        console.warn("failed in selecting img from galary")
      }

       

    }
    // console.log("clicked photos", clickedPhoto)
    return (
        <ScrollView>
            <Text>Camera and gallary</Text>
         <View style={styles.viewContainer}>
         <Button icon="camera-image" mode="contained" onPress={openCameraHandler}>
                Open Camera
            </Button>
           <View style={styles.cameraClickedImgContainer}>
           {clickedPhoto && <Image source={{ uri: `file://${clickedPhoto}` }} width={200} height={200} />}
           </View>

         </View>

           <View style={styles.viewContainer}>
           <Button icon="file-image" mode="contained" onPress={openGalleryHandler}>
                Open Galary
            </Button>

            <View style={styles.cameraClickedImgContainer}>
           {selectedPhoto && <Image source={{ uri: `file://${selectedPhoto}` }} width={200} height={200} />}
           </View>
            
           </View>
        </ScrollView>
    )
}

export default Camera;

const styles = StyleSheet.create({
    viewContainer: {
        margin : 10
    },
    cameraClickedImgContainer : {
        width : "100%",
        height : "300",
        justifyContent : "center",
        alignItems : "center",
        marginTop : 10

    },
})