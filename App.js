/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import 'react-native-gesture-handler'
import FetchLocation from './components/FetchLocation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import getUserLocationHandler from './components/GetUserLocationHandler';
import UsersMap from './components/UsersMap';
import Geolocation from '@react-native-community/geolocation';




let userName = "defaultPranav";

//const App: () => React$Node = () => {
class HomeScreen extends React.Component {
  state =  { 
    userLocation: null,
    usersPlaces:[]
  };

getUserLocationHandler = () => 
{
  Geolocation.getCurrentPosition(position => {
    this.setState({
      userLocation: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
    fetch('https://newapp-263800.firebaseio.com/places.json',{
      method: 'POST',
      body: JSON.stringify({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));

  }, err => console.log(err));
}
  getUserPlacesHandler = () =>{
    fetch('https://newapp-263800.firebaseio.com/places.json')
    
    .then(res => res.json())
    .then(parsedRes => {
      const placesArray = [];
      for (const key in parsedRes)
      {
        placesArray.push({
          latitude: parsedRes[key].latitude,
          longitude: parsedRes[key].longitude,
          id: key,
          user: userName

        });
      }
      this.setState({
        usersPlaces: placesArray
      });
    })
    .catch(err => console.log(err));

  }
  render(){
    //const {navigate} = this.props.navigation;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
            <View style = {{marginBottom: 20}}>
              <Button title = "Get User Places" onPress=
              {this.getUserPlacesHandler}/>
            </View>
          <FetchLocation onGetLocation = {this.getUserLocationHandler}/>
          <UsersMap userLocation={this.state.userLocation} 
          usersPlaces = {this.state.usersPlaces}/>
          <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
          />
      
        </View>
      </SafeAreaView>
    </>
  );
};
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Change Username</Text>
        <TextInput placeholder = {'Enter a Username'} onChangeText =
        {
          (text) => {userName = text;}
        }/>
      </View>
    );
  }
}


const MainNavigator = createStackNavigator({
  Home: HomeScreen,
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
