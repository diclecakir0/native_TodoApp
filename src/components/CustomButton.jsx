import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MyIcon from './MyIcon'


const CustomButton = ({onPress, title, butonIcon, iconColor, bgColor}) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor:bgColor}]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
       {butonIcon && <MyIcon name={butonIcon} color={iconColor} />}
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#23486A',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin:5,
    },
    title:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'MysteryQuest',
    }
})