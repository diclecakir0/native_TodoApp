import { Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreens.jsx'
import SettingsScreen from '../screens/SettingsScreen.jsx'


const BottomTabNavigation = () => {
    const BottomNav = createBottomTabNavigator()
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen name='SettingScreen' component={SettingsScreen} />
      <BottomNav.Screen name='HomeScreen' component={HomeScreen}/>
    </BottomNav.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})