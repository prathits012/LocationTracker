import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import 'react-native-gesture-handler';
import FetchLocation from './FetchLocation';
import UsersMap from './UsersMap';
import Geolocation from '@react-native-community/geolocation';

import {userName} from './SettingsScreen';
export default class MapScreen extends React.Component {
    state =  { 
      userLocation: null,
      usersPlaces:[]
      //userName: 'defaultPranav'
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
          user: userName,
          timestamp:   + new Date()
  
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
            user: parsedRes[key].user,
            timestamp: parsedRes[key].timestamp
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
              <Text style={{marginTop: 20}} >Hello, {userName}</Text>
              <View style = {{marginBottom: 20, marginTop: 20}}>
                <Button title = "Get User Places" onPress=
                {this.getUserPlacesHandler}/>
              </View>
              <FetchLocation onGetLocation = {this.getUserLocationHandler}/>
              <UsersMap userLocation={this.state.userLocation} 
                usersPlaces = {this.state.usersPlaces}/>
          </View>
        </SafeAreaView>
      </>
    );
  };
}