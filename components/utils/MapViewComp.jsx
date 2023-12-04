import { View, Text } from 'react-native'
import React from 'react'
// import MapView from 'react-native-maps';

const MapViewComp = () => {
    return (
        <View>
            <Text>MapViewComp</Text>
            {/* cannot use react-native-map without google api key  */}
            {/* <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            /> */}

        </View>
    )
}

export default MapViewComp