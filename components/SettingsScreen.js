import React  from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import 'react-native-gesture-handler';
export let userName = 'defaultPranav';

export default class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text textAlignVertical={'top'}>Change Username</Text>
            <Text textAlignVertical={'top'}>Your Current Username is {userName}</Text>
            <Text>Reload Settings to see changes</Text>
            <TextInput placeholder = {'Enter a Username'} onChangeText =
            {
                (text) => {userName = text;}
            }/>
        </View>
      );
    }
  }