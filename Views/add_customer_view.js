import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import realm from './realm_database';

export default class Customer_view extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      category: ''
    };
  }

  onSubmit(){
    realm.write(() => {
      realm.create('Customers', {name: this.state.name, phone: parseInt(this.state.phone), email: this.state.email, category: this.state.category});
    });
    this.props.navigator.pop();
  }

  render(){
    return(
      <View>
        <TextInput placeholder = {"Name"}
        onChangeText={(text) => this.setState({name: text})}
        value={this.state.name}/>
        <TextInput placeholder = {"Phone"}
        onChangeText={(text) => this.setState({phone: text})}
        value={this.state.phone}/>
        <TextInput placeholder = {"Email"}
        onChangeText={(text) => this.setState({email: text})}
        value={this.state.email}/>
        <TextInput placeholder = {"Category"}
        onChangeText={(text) => this.setState({category: text})}
        value={this.state.category}/>
        <Button
          title = {"Submit"}
          onPress = {this.onSubmit.bind(this)}
        />
      </View>
    );
  }
}
