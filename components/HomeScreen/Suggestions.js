import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Suggestions = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recipe Suggestions</Text>
            <View style={styles.slider}>

            </View>
        </View>
    )
}

export default Suggestions

const styles = StyleSheet.create({
container:{
backgroundColor:'white',
height:'30%',
},
title:{
textAlign:'center',
fontSize:18,
},
 slider:{
flexDirection:'column'
 },   
})
