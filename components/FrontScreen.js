import React , {Component, PropTypes} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import 'react-native-gesture-handler';
export default class FrontScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text textAlignVertical={'top'}>Welcome Home!</Text>
          <Button
            title="Map View"
            onPress={() => this.props.navigation.navigate('View Map')}
          />
          <Button
            title="Settings"
            onPress={() => this.props.navigation.navigate('Settings')}
          />
        </View>
      );
    }
  }