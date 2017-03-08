import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ListView,
  Navigator,
  TouchableOpacity,
  Dimensions
} from 'react-native';

var {Winheight, Winwidth} = Dimensions.get('window');

export default class Dashboard_view extends Component{

  constructor(props){
    super(props);
  }

  add_customer(){
    this.props.navigator.push({
      routeid: 'addCus'
    });
  }

  list_customer(){
    this.props.navigator.push({
      routeid: 'list'
    });
  }

  send_texts(){
    this.props.navigator.push({
      routeid: 'sendMess'
    });
  }

  render() {
    return (
      <Navigator
        initialRoute = {{id: "login_page"}}
        renderScene = {this.renderScene.bind(this)}
        />
    );
}

  renderScene(){
    return(
      <View style = {styles.parent}>
      <TouchableOpacity onPress = {this.add_customer.bind(this)}><Text style = {styles.item} >Add Customer</Text></TouchableOpacity>
      <TouchableOpacity><Text style = {styles.item} >Edit Customer</Text></TouchableOpacity>
      <TouchableOpacity onPress = {this.list_customer.bind(this)}><Text style = {styles.item} >List Customer</Text></TouchableOpacity>
      <TouchableOpacity onPress = {this.send_texts.bind(this)}><Text style = {styles.item} >Send Texts</Text></TouchableOpacity>
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
