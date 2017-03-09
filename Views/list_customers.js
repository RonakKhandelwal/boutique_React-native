import React, { Component } from 'react';
import {
  View,
  Text
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
    };
  }

  render() {
    return (
      <View>
      <ListView dataSource={this.state.dataSource}
      renderSectionHeader={this.renderSectionHeader}
      renderRow={this.renderRow} />
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

  renderRow(item, sectionIndex, rowIndex) {
    return(
      <View style = {styles.row}>
      <View style = {styles.name}><Text>{item.name}</Text></View>
      <View style = {styles.phone}><Text>{item.phone}</Text></View>
      </View>
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
    borderBottomWidth: .5,
    flexDirection: 'row',

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
