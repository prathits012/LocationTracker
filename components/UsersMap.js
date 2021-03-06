import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
let numKey = 501;
const usersMap = props => {
    var userLocationMarker = null;
    if(props.userLocation)
    {
        userLocationMarker = <MapView.Marker title = 'My Current Location' 
        coordinate = {props.userLocation}/>;
    }
    console.log('in usersmap');
    console.log(props.usersPlaces);
    console.log('in usersmapdone');
    let usersMarkers = props.usersPlaces.map(userPlace => 
    (<MapView.Marker 
        title = {userPlace.user } coordinate = { userPlace} key = {numKey++}
        description = {'Location was last updated '+ ( Math.round(((+ new Date()) 
        - userPlace.timestamp)/60000)) + ' minutes ago'}/>) );
    console.log(usersMarkers);
    return (
        

        <View style = {styles.mapContainer}>
            <MapView  
                showsCompass={true}
                shows
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  region={props.userLocation}
                style = {styles.map}>
                {userLocationMarker}
                {usersMarkers}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: 
    {
        width: '100%',
        height: '70%',
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default usersMap;