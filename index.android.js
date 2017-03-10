/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid
} from 'react-native';

// Different Screens Imports
import Login_page from './Views/login_page.js';
import Dashboard from './Views/dashboard_view.js'
import Send_message from './Views/send_message.js';
import Add_customer from './Views/add_customer_view.js';
import List_customer from './Views/list_customers.js';

// Initial Scene
var initialScene = "login_page";


export default class abhishekRnApp extends Component {

  componentDidMount(){
    BackAndroid.addEventListener("hardwareBackPress", () => {
        this._navigator.pop();
        return true;
      })
  }

  render() {
    return (
      <Navigator
        ref={component => this._navigator = component}
        initialRoute = {{routeid: initialScene}}
        renderScene = {this.renderScene.bind(this)}
        />
    );
  }

  renderPlayground(route, navigator){
    return(
      <Login_page navigator = {navigator} />
    );
  }

  renderScene(route, navigator){
    var routeId = route.routeid;
    if(routeId == "login_page"){
      return(
        <Login_page navigator = {navigator} />
      );
    }
    else if(routeId == "dashboard"){
      return(
        <Dashboard navigator = {navigator} />
      );
    }
    else if(routeId == "sendMess"){
      return(
        <Send_message navigator = {navigator} />
      );
    }
    else if(routeId == "addCus"){
      return(
        <Add_customer navigator = {navigator} item = {route.item} />
      );
    }
    else if(routeId == "list"){
      return(
        <List_customer navigator = {navigator} />
      )
    }
    else{
      return(
        <Login_page navigator = {navigator} />
      );
    }
    // return(<View></View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('abhishekRnApp', () => abhishekRnApp);
