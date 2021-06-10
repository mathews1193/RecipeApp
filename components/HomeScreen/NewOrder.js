import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const NewOrder = () => {
    return (
        <View style={styles.container}>
            <Text>Orders</Text>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text>Submit a New Order</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
}

export default NewOrder

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#d0d9d9",
        width:'100%',
        borderRadius:20,
        alignItems:'center',
    },
    button: {
        alignItems: 'center',
        height: '30%',
        width: '70%',
        marginVertical: 50,
        backgroundColor: "#097ad6",
        borderRadius: 10, 
        padding: 10
      },
});
