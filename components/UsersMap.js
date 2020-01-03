import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
const usersMap = props => {
    var userLocationMarker = null;
    if(props.userLocation)
    {
        userLocationMarker = <MapView.Marker title = 'My Current Location' 
        coordinate = {props.userLocation}/>;
    }

    const usersMarkers = props.usersPlaces.map(userPlace => 
    (<MapView.Marker title = {userPlace.user } coordinate = { userPlace} key = {userPlace.id}
                    description = {'Location was last updated '+ ( Math.round(((+ new Date()) - userPlace.timestamp)/60000)) + ' minutes ago'}/>) );
    return (
        

        <View style = {styles.mapContainer}>
            <MapView  
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
        height: 200,
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default usersMap;