import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../screens/AuthScreens/SignIn'
import SignUp from '../screens/AuthScreens/SignUp'


const AuthNavigation = () => {
    // Signin ve signup ekranları arasında geçiş sağlamak için buu her iki ekranı stack haline getirdik
    const AuthStack = createNativeStackNavigator();
  return (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="SignUpScreen" component={SignUp} />
    <AuthStack.Screen name="SignInScreen" component={SignIn} />
</ AuthStack.Navigator> 
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})