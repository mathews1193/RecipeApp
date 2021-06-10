import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const Header = () => {

    const image = { uri: "https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" };

    var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    var today = new Date();
    var hour = today.getHours()
    var day;
    var greeting;
    var name = "Donald";

    if (hour > 12){
        hour = today.getHours() - 12 ; 
        day = "pm";
        greeting = "Good Evening!"
    }
    else if (hour == 0){
        hour = 12;
        day = "am";
        greeting = "Good Morning!"
    }
    else {
        hour = today.getHours();
        day = "am";
        greeting = "Good Morning!"
    }

    var currentDate = month[(today.getMonth())] + ', ' + today.getDate() + ' ' + today.getFullYear();
    var currentTime = hour + ':' + today.getMinutes() + day;

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.header}>{currentDate}</Text>
                <Text style={styles.header}>{currentTime}</Text>
                <Text style={styles.header}>{greeting} {name}</Text>
            </ImageBackground>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    },
  header:{
    color:'white',
    fontSize:20,
    textAlign:'center',
    marginTop:15,
  },
  image: {
    resizeMode:"cover",
    width:'100%',
    height:'100%',
  },
})
