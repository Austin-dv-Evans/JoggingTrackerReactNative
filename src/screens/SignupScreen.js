import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Text, Input, Button } from "react-native-elements"
import Spacer from "../components/spacer"

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.textSpace}>
          Sign Up For Tracker
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  textSpace: {
    display: "flex",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
})

export default SignupScreen
