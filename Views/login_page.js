import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Navigator
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
    if(this.state.username == "admin" && this.state.password == "admin")
    this.props.navigator.push({
      routeid: "dashboard"
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
      <View>
        <Text>Username</Text>
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
        />
        <Text>Password</Text>
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
        />
        <Button
          onPress={this.onSubmit.bind(this)}
          title="Login"
          color="#841584"
        />
      </View>
    );
  }
}
