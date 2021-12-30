/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {SafeAreaView,StatusBar,StyleSheet, ScrollView } from 'react-native';
import MainController from './components/MainController';
import FakeAppBar from './components/FakeAppBar';
import { RokuContextProvider } from './contexts/RokuContext';
//import HelloWorldComponent from './components/HelloWorld';


const App: () => Node = () => {

  const backgroundStyle = {
      flex:1,
      flexDirection:'column',
      margin:10,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
    <StatusBar barStyle={'light-content'} />
    <RokuContextProvider>
        <FakeAppBar title="Roku Controller"/>
        <ScrollView>
             <MainController />
        </ScrollView>
    </RokuContextProvider>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
