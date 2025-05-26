import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import MyIcon from './MyIcon' // Assuming MyIcon is a custom icon component

const CustomInput = ({containerStyle, placeholder, onChangeText, value, inputStyle, inputIcon, iconColor}) => {
  return (
    <View style={[styles.container, containerStyle]}> 
    <MyIcon styles={styles.icon} name={inputIcon}  color={iconColor} size={20}/>
  <TextInput  placeholder={placeholder} placeholderTextColor={'#1f2937'} onChangeText={onChangeText} value={value} style={[styles.input, inputStyle]}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#8E7DBE',
        padding:6,
        paddingLeft:3,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
        
    },
    icon:{
        position: 'absolute',
        zIndex: 2,
        left: 5
    },
    input:{
        backgroundColor: '#4b5563',
        padding: 15,
        fontSize: 25,
        width: '90%',
        paddingLeft: 5        
    }
})