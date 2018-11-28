import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'
import ContentStackNav from './components/Navigator/StackNavi'
import Switchnavi from './components/Navigator/SwitchNav'

export default class App extends Component{
  render() {
    return (
      <Switchnavi />
        
   
    );
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
  }

});
