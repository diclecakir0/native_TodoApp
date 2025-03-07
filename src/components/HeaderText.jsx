import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderText = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default HeaderText

const styles = StyleSheet.create({

    text:{
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop: 10,
        color: 'blue',
        fontFamily: 'MysteryQuest'
    }

})