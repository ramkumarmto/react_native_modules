/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Camera from './components/devicefeatures/Camera';
import { PaperProvider, Button } from 'react-native-paper';
// import { Button } from 'react-native-paper';
import DatePickerComp from './components/utils/DatePickerComp';
import ClipBoardComp from './components/utils/ClipBoardComp';
import NetInfoComp from './components/utils/NetInfoComp';
import MaskedViewComp from './components/utils/MaskedViewComp';
import QueryStrComp from './components/utils/QueryStrComp';
import GlobalSearch from './components/utils/GlobalSearch';
import GeolocationComp from './components/utils/GeolocationComp';
import MapViewComp from './components/utils/MapViewComp';



// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     secondary: 'yellow',
//   },
// };




function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white
          }}>
         {/* <Camera /> */}
         {/* <DatePickerComp /> */}
         {/* <ClipBoardComp /> */}
         {/* <NetInfoComp /> */}
         {/* <MaskedViewComp /> */}
         {/* <QueryStrComp /> */}
         {/* <GlobalSearch /> */}
         {/* <GeolocationComp /> */}
         <MapViewComp />
        </View>
      </ScrollView>
    </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
 

});

export default App;
