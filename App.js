/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {SafeAreaView,StatusBar,StyleSheet} from 'react-native';
import MainController from './components/MainController';
import FakeAppBar from './components/FakeAppBar';
import { RokuContextProvider } from './contexts/RokuContext';
import HelloWorldComponent from './components/HelloWorld';


const App: () => Node = () => {

  const backgroundStyle = {
      flex:1,
      flexDirection:'column',
      margin:10,
  };
      //<RokuContextProvider>
      //</RokuContextProvider>

  return (
    <SafeAreaView style={backgroundStyle}>
    <StatusBar barStyle={'light-content'} />
    <RokuContextProvider>
        <FakeAppBar title='Roku Controller'/>
        <MainController />
        </RokuContextProvider>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
