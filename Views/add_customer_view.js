import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  DatePickerAndorid
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
      category: '',
      valid: '',
      amount: '',
      editable: true
    };
  }

  componentDidMount(){
    var item = this.props.item;
    if(item != null){
      this.setState({
        name: item.name,
        phone: item.phone,
        email: item.email,
        category: item.category,
        valid: item.valid,
        amount: String(item.amount),
        editable: false
      });
    }
  }

  openDatePicker(){

  }

  onSubmit(){
    realm.write(() => {
      realm.create('Customers', {name: this.state.name, phone: this.state.phone, email: this.state.email, category: this.state.category, valid: this.state.valid, amount: parseInt(this.state.amount)}, true);
    });
    this.props.navigator.pop();
  }

  render(){
    return(
      <View style = {styles.add_customer}>
        <TextInput placeholder = {"Name"}
        onChangeText={(text) => this.setState({name: text})}
        value={this.state.name}/>
        <TextInput placeholder = {"Phone"}
        onChangeText={(text) => this.setState({phone: text})}
        editable = {this.state.editable}
        keyboardType = {'phone-pad'}
        value={this.state.phone}/>
        <TextInput placeholder = {"Email"}
        onChangeText={(text) => this.setState({email: text})}
        keyboardType = {'email-address'}
        value={this.state.email}/>
        <TextInput placeholder = {"Category"}
        onChangeText={(text) => this.setState({category: text})}
        value={this.state.category}/>
        <TextInput placeholder = {"Amount"}
        keyboardType = {'numeric'}
        onChangeText={(text) => this.setState({amount: text})}
        value={this.state.amount}/>
        <TextInput placeholder = {"Valid Till"}
        style = {styles.valid}
        onChangeText={(text) => this.setState({valid: text})}
        value={this.state.valid}/>
        <Button
          title = {"Submit"}
          onPress = {this.onSubmit.bind(this)}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  add_customer: {
    marginTop: 50,
    marginLeft: 20,
    marginRight:20,
  },
  submit_customer:{
    margin: 40,
    backgroundColor: '#ff0000'
  },
  valid:{
    marginBottom: 50
  }

});
