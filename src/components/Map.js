import React from 'react';
import { Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        longitude: -105.7821,
        latitude: 39.5501,
        latitudeDelta: 8.04,
        longitudeDelta: 8.05,
      }}
    />
  )
}

const styles = StyleSheet.create({
  map: {
    height: 320
  }
})

export default Map