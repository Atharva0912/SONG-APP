import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, Linking } from 'react-native';

import English from './screens/English';
import Hindi from './screens/Hindi';
import Punjabi from './screens/Punjabi';
import Spanish from './screens/Spanish';
export default class App extends Component {
  render() {
    return (
     //<View>
     //  <Text>SHORT SONG APP</Text>
     //</View>
      <View style={styles.MainContainer}>
 <Text style = {styles.TextStyle}>SHORT SONG APP</Text>
        <TouchableOpacity style = {styles.ButtonStyle} onPress={ ()=> Linking.openURL('https://atharva0912.github.io/just-testing/') }>
        <Text>HINDI SONGS</Text>
        </TouchableOpacity>
<TouchableOpacity style = {styles.ButtonStyle} onPress={ ()=> Linking.openURL('https://atharva0912.github.io/english/') }>
        <Text>ENGLISH SONGS</Text>
        </TouchableOpacity>
          <TouchableOpacity style = {styles.ButtonStyle} onPress={ ()=> Linking.openURL('https://atharva0912.github.io/punjabi/') }>
        <Text>PUNJABI SONGS</Text>
        </TouchableOpacity>
    <TouchableOpacity style = {styles.ButtonStyle} onPress={ ()=> Linking.openURL('https://atharva0912.github.io/spanish/') }>
        <Text>SPANISH SONGS</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
const styles = StyleSheet.create({
 
  MainContainer :{
      flex:1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow'
  
  },
  TextStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: -400
  },
  ButtonStyle: {
    borderWidth: 5,
    borderHeight: 10,
    backgroundColor: 'skyblue',
    marginTop: 20

  }
 
});
