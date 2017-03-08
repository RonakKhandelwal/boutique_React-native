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
    this.state = {
            dataSource: dataSource.cloneWithRows(customers),
        };
  }

  render() {
       return (
           <View>
               <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
           </View>
       );
   }

   renderRow(item, sectionIndex, rowIndex) {
     return(
       <View style = {styles.row}>
        <Text>Name: {item.name}</Text>
        <Text>Phone No: {item.phone}</Text>
       </View>
     );
   }
}

var styles = {
  row: {
    margin: 10,
    borderBottomWidth: .5,
  }
};
