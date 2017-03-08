import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  Picker,
  Button
} from 'react-native';

import SendSMS from 'react-native-sms';
import realm from './realm_database';

export default class Send_message extends Component{

  constructor(props){
    super(props);

    let recip = realm.objects('Customers');
    var arr = []
    for(i = 0; i < recip.length; i++){
      arr[i] = recip[i].phone;
    }

    this.state = {
      message: '',
      recipients: arr
    };
  }

  requestSMSPermission() {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera")
      } else {
        console.log("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  onSubmit(){
    console.log(this.state.recipients);
    SendSMS.send({
      body: this.state.message,
      recipients: this.state.recipients,
      successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {
      console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
    });
  }


  render(){
    return(
      <View>
      <TextInput placeholder = {"Enter The Text"}
      multiline = {true}
      numberOfLines = {5} />
      <Button
      title = {"Send To All"}
      onPress = {this.onSubmit.bind(this)} />
      </View>
    );
  }
}
