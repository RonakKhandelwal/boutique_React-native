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


import SendSMS from 'react-native-sms';
import realm from './realm_database';

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
    let custList = realm.objects('Customers');

    var arr = [];
    var j = 0;
    for(var i in custList){
      arr[j++] = String(custList[i].phone);
    }
console.log(arr);
    SendSMS.send({
      body: '',
      recipients: arr,
      successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {
      console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
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
    backgroundColor: '#8a2be2',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ff0000',
    fontSize: 40,
    margin: 20,
    width: 380,
    height: 180,
    paddingTop: 50
  }
});
