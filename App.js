import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/screen/auth/loginScreen'
import Navigation from './src/Navigation/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
    <Navigation />
  </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})