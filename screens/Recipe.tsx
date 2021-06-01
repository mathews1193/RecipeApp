import React from 'react'
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const image = { uri: "https://images.pexels.com/photos/7904958/pexels-photo-7904958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };

export default function Recipe() {
    return (
        <View style ={styles.container}>
            <StatusBar barStyle= "light-content"/>
            <ImageBackground source={image} style={styles.image}>
                <View style ={styles.back}>
                    <Ionicons name="ios-arrow-back-circle-sharp" size={35} color="black" />
                    <Text style ={styles.back1}>Back</Text>
                </View>
                <Text style ={styles.title}>Tacos</Text>
            </ImageBackground>
            <View style = {styles.infor}>
                    <Text style = {styles.sub}>Category</Text>
                    <Text style = {styles.sub}>Ingredients</Text>
                    <Text style = {styles.sub}>Instructions</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:30,
    },
    title:{
        fontWeight:'bold',
        marginTop:160,
        marginHorizontal:20,
        fontSize:25,
        fontFamily:"Papyrus",
    },
    image: {
        height:250,
        width:'100%',
        borderRadius: 10,
      },
    back:{
        flexDirection:'row',
        alignItems:'center',
    },
    back1:{
        fontSize:20,
    },
    infor:{
        backgroundColor: "#d0d9d9",
        height:'80%',
        width:'100%',
        borderWidth: 1,
    },
    sub:{
        padding:10,
    },
})

