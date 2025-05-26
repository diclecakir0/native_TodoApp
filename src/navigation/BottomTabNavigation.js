import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const BottomTabNavigation = () => {
    const BottomNav = createBottomTabNavigator()
  return (
    <View>
        <Text>BottomTabNavigatör</Text>
    </View>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})