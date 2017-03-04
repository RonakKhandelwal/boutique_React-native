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
  Navigator
} from 'react-native';

// Different Screens Imports
import Login_page from './Views/login_page.js';
import Playground from './Views/add_customer_view.js';

// Initial Scene
var initialScene = "login_page";

export default class abhishekRnApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{id: initialScene}}
        renderScene = {this.renderPlaygroundScene.bind(this)}
        />
    );
  }

  renderPlaygroundScene(route, navigator){
    return(
      <Playground navigator = {navigator} />
    );
  }

  renderScene(route, navigator){
    var routeId = route.id;
    console.log(Login_page);
    if(routeId == "login_page"){
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
