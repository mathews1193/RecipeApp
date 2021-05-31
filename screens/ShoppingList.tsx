import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';



export default function OrderScreen() {

  const [quantity, setQuantity] = useState("");
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
     
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        onChangeText={setQuantity}
        value={quantity}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Item name"
        onChangeText={onChangeText}
        value={text}
      />
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>Add New Item</Text>
        </TouchableOpacity>
      </View> 
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.header}>
        <Text>QTY</Text><Text style={{paddingLeft:100}}>Item</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.item}>{quantity}</Text><Text style={styles.item2}>{text}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: "#d0d9d9",
    height: 50,
    width:300,
    alignItems:'center',
    margin: 12,
    borderRadius: 10, 
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    height: 50,
    width: 300,
    marginVertical: 50,
    marginHorizontal: 40, 
    backgroundColor: "#097ad6",
    borderRadius: 10, 
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header:{
    flexDirection: 'row',
    paddingBottom:10,
  },
  item:{
    textAlign: "center",
    color:"black",
    height: 30,
    width: 60,
    backgroundColor: "#d0d9d9",
    borderRadius: 10, 
  },
  item2:{
    textAlign: "center",
    color:"black",
    height: 30,
    width: 80,
    marginLeft:80,
    backgroundColor: "#d0d9d9",
    borderRadius: 10, 
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
