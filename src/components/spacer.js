// only job of this component is to apply margin to React Native Element components
import React from "react"
import { View, StyleSheet } from "react-native"

const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>
}

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
})

export default Spacer
