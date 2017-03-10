import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Navigator
} from 'react-native';

import realm from './realm_database';
import { ListView } from 'realm/react-native';

export default class list_view extends Component{
  constructor(props){
    super(props);
    let dataSource = new ListView.DataSource({
      rowHasChanged(a, b) {
        // Always re-render TodoList items.
        return a.name !== b.name || a.phone !== b.phone;
      }
    });
    let customers = realm.objects('Customers');
    var head  = {name: "Name", phone: "Phone"};
    this.state = {
      dataSource: dataSource.cloneWithRows(customers),
      search: ''
    };
  }

  onSubmitText(text){
    let res = realm.objects('Customers').filtered('name CONTAINS "'+ this.state.search + '"OR phone CONTAINS "' + this.state.search + '"');
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(res)
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

  renderScene() {
    return (
      <View>
      <TextInput
      placeholder = {"Search"}
      onChangeText={(text) => this.setState({search: text})}
      value={this.state.search}
      onSubmitEditing = {this.onSubmitText.bind(this)}
      />
      <ListView dataSource={this.state.dataSource}
      renderSectionHeader={this.renderSectionHeader}
      renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }

  renderSectionHeader(){
    return(
      <View style = {styles.header}>
      <View style = {styles.name}><Text>Name</Text></View>
      <View style = {styles.phone}><Text>Phone</Text></View>
      </View>
    );
  }

  rowPress(data){
    if(data != null){
      this.props.navigator.push({
        routeid: 'addCus',
        item: data
      })
    }
  }

  renderRow(item, sectionIndex, rowIndex) {
    return(
      <TouchableOpacity style = {styles.row} onPress = {this.rowPress.bind(this,item)}>
      <View style = {styles.name}><Text>{item.name}</Text></View>
      <View style = {styles.phone}><Text>{item.phone}</Text></View>
      </TouchableOpacity>
    );
  }
}

var styles = {
  header:{
    margin: 10,
    borderBottomWidth: .5,
    flexDirection: 'row',
    backgroundColor: '#d3d3d3'
  },
  row: {
    margin: 10,
    borderWidth: .5,
    flexDirection: 'row',
    marginTop: 20
  },
  name: {
    flex: .5,
    borderRightWidth: .5
  },
  phone: {
    flex: .5,
    paddingLeft: 5
  }
};
