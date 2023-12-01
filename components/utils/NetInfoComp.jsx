import { View, Text, Pressable } from 'react-native'
import React, { useEffect} from 'react';
import NetInfo from "@react-native-community/netinfo";

const NetInfoComp = () => {


    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
          });

          return ()=>{
            unsubscribe()
          }

    }, [])

    const netInfoHandler = ()=>{
        NetInfo.fetch().then((state) => console.log("net info state", state))
    }


  return (
    <View>
      <Text>NetInfoComp</Text>
      <Pressable onPress={netInfoHandler}>
        <Text> Net Info</Text>
      </Pressable>
    </View>
  )
}

export default NetInfoComp