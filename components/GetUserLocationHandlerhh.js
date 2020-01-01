import React from 'react';
//import FetchLocation from 'FetchLocation.js';
import Geolocation from '@react-native-community/geolocation';
//import {PermissionsAndroid} from 'react-native';








export default getUserLocationHandler = () => 
{
  console.log('Pressed the Button');
  Geolocation.getCurrentPosition(position => 
    {console.log(position);}
    , err => console.log(err));
}