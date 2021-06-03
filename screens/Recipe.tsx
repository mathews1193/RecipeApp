import React from 'react'
import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
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
            <ScrollView style = {styles.infor}>
                    <Text style = {styles.sub}>Miscellaneous</Text>
                    <Text style = {styles.sub}>Ingredients</Text>
                    <Text>3 Corn Tortillas</Text>
                    <Text>1lb Beef</Text>
                    <Text>4oz Onion</Text>
                    <Text>2oz Cilantro</Text>
                    <Text style = {styles.sub}>Instructions</Text>
                    <Text>1) Cut the beef</Text>
                    <Text>2) Chop Onions and Cilantro</Text>
                    <Text>3) Cook beef in pan</Text>
                    <Text>4) Put ingredients into tortillas</Text>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       paddingTop:40,
    },
    title:{
        fontWeight:'bold',
        marginTop:190,
        marginHorizontal:20,
        fontSize:25,
    },
    image: {
        height:280,
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
        backgroundColor: "#fafffb",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:'80%',
        width:'100%',
        borderWidth: 1,
    },
    sub:{
        padding:10,
        fontWeight:'bold', 
        fontSize:18,
    },
})

