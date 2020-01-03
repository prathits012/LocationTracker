import React , {Component, PropTypes} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Navigator, 
  TouchableHighlight,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SettingsScreen from './components/SettingsScreen';
import MapScreen from './components/MapScreen';
import FrontScreen from './components/FrontScreen'


const MainNavigator = createStackNavigator({
  'Home Page': FrontScreen,
  'View Map': MapScreen,
  Settings: SettingsScreen,
});

const App = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default App;
