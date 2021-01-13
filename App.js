/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App(){
  return (
    <View style={styles.container}>
      <View style={styles.yellowview}>
        <Text>hello!</Text>
      </View>
      <View style={styles.blueview}>
        <Text>hellooooo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  yellowview: {
    flex: 1,
    backgroundColor: "yellow",
    color: "black"
  },
  blueview: {
    flex: 1,
    backgroundColor: "blue"
  },
  text: {
    color: "black"
  }
});