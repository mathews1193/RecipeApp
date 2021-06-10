import * as React from 'react';
import { StyleSheet } from 'react-native';
import Header from '../components/HomeScreen/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import { Text, View } from '../components/Themed';
import Suggestions from '../components/HomeScreen/Suggestions';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.banner}> 
          <View style={styles.circle}>
            <MaterialCommunityIcons name="truck-delivery" size={40} color="black" />
            <Text style={styles.text}>Delivery</Text>
          </View>
          <View style={styles.circle}>
            <Ionicons name="car-sport" size={40} color="black" />
            <Text style={styles.text}>Curbside</Text>
          </View>
          <View style={styles.circle}>
            <MaterialIcons name="phone-iphone" size={40} color="black" />
            <Text style={styles.text}>Digital List</Text>
          </View>
        </View>
        <Suggestions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width:'100%',
    height:'80%',
  },
  header:{
    flex:1,
  },
  banner:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  circle:{
    backgroundColor:"white",
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    padding:15,
    marginHorizontal:10,
  },
  text:{
    color:'black',
  }
});
