import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

export default class Customer_view extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      membership: '',
      category: ''
    };
  }

  onSubmit(){

  }

  render(){
    return(
      <View>
        <TextInput placeholder = {"Name"}
        onChangeText={(text) => this.setState({name})}
        value={this.state.name}/>
        <TextInput placeholder = {"Phone"}
        onChangeText={(text) => this.setState({phone})}
        value={this.state.phone}/>
        <TextInput placeholder = {"Email"}
        onChangeText={(text) => this.setState({email})}
        value={this.state.email}/>
        <TextInput placeholder = {"Membership Valid Till"}
        onChangeText={(text) => this.setState({membership})}
        value={this.state.membership}/>
        <TextInput placeholder = {"Category"}
        onChangeText={(text) => this.setState({category})}
        value={this.state.category}/>
        <Button
          title = {"Submit"}
          onPress = {this.onSubmit.bind(this)}
        />
      </View>
    );
  }
}
