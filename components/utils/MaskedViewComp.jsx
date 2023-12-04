import { View, Text } from 'react-native'
import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';

const MaskedViewComp = () => {
    return (
        <>
        <MaskedView
            // style={{ flex: 1, flexDirection: 'row', height: '100%' }}
            maskElement={
                <View
                    style={{
                        // Transparent background because mask is based off alpha channel.
                        backgroundColor: 'transparent',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 60,
                            color: 'black',
                            fontWeight: 'bold',
                        }}
                    >
                        Basic Mask
                    </Text>
                </View>
            }
        >
            {/* Shows behind the mask, you can put anything here, such as an image */}
            <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
            <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
            <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
            <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
        </MaskedView>

        <View>
            <Text>jkdkl;</Text>
        </View>
        </>
    )
}

export default MaskedViewComp