import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import StackNavi from './StackNavi'
import ShippingScreen from '../screens/ShippingScreen'
import PaymentStack from './PaymentStack';
export default Switchnavi = createSwitchNavigator({
  Auth: StackNavi,
  Home:ShippingScreen,
  Card:PaymentStack
 
},{
initialRouteName: 'Auth'
})