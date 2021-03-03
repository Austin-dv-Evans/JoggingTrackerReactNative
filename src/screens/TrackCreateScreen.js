import React from "react"
import { StyleSheet } from "react-native"
import { Text } from 'react-native-elements'

import Map from '../components/Map'

const TrackCreateScreen = () => {
  return (
    <>
      <Text h1 style={styles.headingText}>Create a Track </Text>
      <Map />
    </>
    
  )
}

const styles = StyleSheet.create({
  headingText: {
    paddingTop: 80,
    textAlign: 'center',
    color: 'blue'
  }
})

export default TrackCreateScreen
