import React, { useContext } from "react"
import { View, StyleSheet, Text } from "react-native"
import { Button } from 'react-native-elements'
import Spacer from '../components/spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {

  const { signout } = useContext(AuthContext)

  return(
    <>
      <Text style={styles.headingText}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 48,
    paddingTop: "50%",
    textAlign: "center",
  },
})

export default AccountScreen
