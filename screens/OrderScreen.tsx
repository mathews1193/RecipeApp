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
    hasQuestion: 1,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    Name: "Arya Stark",
    type: "Pick-Up",
    date:"09-14-19",
    hasQuestion: 1,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    Name: "Jean Grey",
    type: "Curbside",
    date:"12-23-20",
    hasQuestion: 0,
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <Fragment>
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <View style={[styles.view]}>
      <Text style={[styles.title, textColor]}>{item.Name} {item.type} {item.date}</Text>
      {item.hasQuestion > 0 && <Text style={[styles.noti]}> ! </Text> }
      </View>
    </TouchableOpacity>
      <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
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
      <Text style={styles.title}>My Orders</Text>
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
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  noti: {
    fontSize: 16,
    color: "red",
    textAlign: 'right',
    alignSelf: "flex-end",
  },
  logo: {
    marginBottom: 30,
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  separator: {
    marginVertical: 2,
    height: 1,
    width: '80%',
  },
  view: {
    flexDirection: "row",
  }
});
