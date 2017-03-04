import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class Login_page extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  onSubmit(){
    console.log("Button Pressed");
  }

  render(){
    return(
      <View>
        <Text>Username</Text>
        <TextInput
          onChangeText={(text) => this.setState({username})}
          value={this.state.username}
        />
        <Text>Password</Text>
        <TextInput
          onChangeText={(text) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          onPress={this.onSubmit.bind(this)}
          title="Submit"
          color="#841584"
        />
      </View>
    );
  }
}
