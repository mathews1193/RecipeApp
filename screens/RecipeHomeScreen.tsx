import * as React from 'react';
import { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

const beef = {uri:"https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"};
const pork = {uri:"https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"};
const seafood = {uri:"https://images.pexels.com/photos/2410602/pexels-photo-2410602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"};
const vegetable = {uri:"https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"};
const desserts = {uri:"https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"};
const apps = {uri:"https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"};
const chicken = {uri:"https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"};
const miscellaneous = {uri:"https://images.pexels.com/photos/7904958/pexels-photo-7904958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"};

export default function RecipeScreen({ navigation }) {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Search for Recipes......"
        onChangeText={onChangeText}
        value={text}
      />
      <View style={styles.card}>
        <ImageBackground source={beef} style={styles.image}>
          <View style={styles.shadow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Recipe')}>
              <Text style={styles.sub}>Beef</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.secImage}>
          <ImageBackground source={pork} style={styles.image}>
            <View style={styles.shadow}>
              <TouchableOpacity
                  onPress={() => navigation.navigate('Recipe')}>
                  <Text style={styles.sub}>Pork</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.card}>
        <ImageBackground source={seafood} style={styles.image}>
          <View style={styles.shadow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Recipe')}>
              <Text style={styles.sub}>Seafood</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.secImage}>
          <ImageBackground source={vegetable} style={styles.image}>
          <View style={styles.shadow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Recipe')}>
              <Text style={styles.sub}>Vegetables</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
      </View>
      <View style={styles.card}>
        <ImageBackground source={chicken} style={styles.image}>
          <View style={styles.shadow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Recipe')}>
              <Text style={styles.sub}>Poultry</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.secImage}>
          <ImageBackground source={miscellaneous} style={styles.image}>
            <View style={styles.shadow}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Recipe')}>
                <Text style={styles.sub}>Miscellaneous</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        </View>
      <View style={styles.card}>
        <ImageBackground source={desserts} style={styles.image}>
          <View style={styles.shadow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Recipe')}>
              <Text style={styles.sub}>Desserts</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.secImage}>
          <ImageBackground source={apps} style={styles.image}>
            <View style={styles.shadow}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Recipe')}>
                <Text style={styles.sub}>Appetizers</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    backgroundColor: "#d0d9d9",
    marginTop:5,
    height: '6%',
    width:'95%',
    alignItems:'center',
    borderRadius: 10, 
  },
  card:{
    padding:6,
    flexDirection:'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width:180,
    height:180,
  },
  shadow:{
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  secImage:{
    paddingHorizontal:9,
  },
  sub:{
   fontSize:25,
   textAlign:'center',
   paddingVertical:60,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
