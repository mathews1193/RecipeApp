import React, {Fragment, useState} from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Button, Image } from "react-native";

import { Text, View} from '../components/Themed';

//import firebase from '../components/Firebase';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    Name: "Lex Luther",
    type: "Delivery",
    date:"5-29-21",
    time: "9:50am",
    city:"Smallville",
    state:"California",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    Name: "Arya Stark",
    type: "Pick-Up",
    date:"09-14-19",
    time: "1:30pm",
    city:"San Franciso",
    state:"California",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    Name: "Jean Grey",
    type: "Curbside",
    date:"12-23-20",
    time: "11:20am",
    city:"Salem Center",
    state:"New York",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <Fragment>
    <View style={[styles.view]}>
      <Text style={[styles.title, textColor]}>Name: {item.Name}</Text>
      <Text style={[styles.title, textColor]}>Delivery Type: {item.type}</Text> 
      <Text style={[styles.title, textColor]}>Date: {item.date}</Text>
      <Text style={[styles.title, textColor]}>Time: {item.time}</Text>
      <Text style={[styles.title, textColor]}>City: {item.city}</Text>
      <Text style={[styles.title, textColor]}>State: {item.state}</Text>
      </View>

      <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
      }}
    />
  </Fragment>
);
  
export default function OrderScreen( { navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  const navigateDetail = () => {
    console.log("to patient page");
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "blue" : "white";
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        onPress={() => navigateDetail()}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    flexDirection: "column",
  },
  separator: {
    marginVertical: 2,
    height: 1,
    width: '80%',
  },
  view: {
    marginVertical:5,
    width:300,
    padding:15,
    backgroundColor:'#d0d9d9',
  }
});
