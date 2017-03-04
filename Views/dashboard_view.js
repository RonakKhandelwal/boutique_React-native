import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ListView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

var {Winheight, Winwidth} = Dimensions.get('window');

export default class Dashboard_view extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style = {styles.parent}>
      <TouchableOpacity><Text style = {styles.item} >Add Customer</Text></TouchableOpacity>
      <TouchableOpacity><Text style = {styles.item} >Edit Customer</Text></TouchableOpacity>
      <TouchableOpacity><Text style = {styles.item} >List Customer</Text></TouchableOpacity>
      <TouchableOpacity><Text style = {styles.item} >Send Texts</Text></TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    backgroundColor: '#CCC',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 5,
    width: 190,
    height: 300
  }
});
