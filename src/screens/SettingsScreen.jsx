import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SettingsScreen = () => {

        const handleLogOut = async () => {
              
            try {
                await AsyncStorage.clear()
                console.log('Done')
              } catch(e) {
                // clear error
              }


        }

  return (
    <View style={{backgroundColor: 'white'}}>
    <CustomButton title={'Çıkış Yap'} bgColor={'black'} onPress={()=>handleLogOut} />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})