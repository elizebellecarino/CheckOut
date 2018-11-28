import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'
import AddressScreen from '../screens/AddressScreen'
import ShippingScreen from '../screens/ShippingScreen'
import PaymentScreen from '../screens/PaymentScreen'
import PaymentStack from '../Navigator/PaymentStack'


export default TopTabNavi = createMaterialTopTabNavigator({
    Address:{
      screen:AddressScreen,
    navigationOptions: {
      tabBarLabel: 'Address'
    }
    },
    Shipping: {
      screen:ShippingScreen,
    navigationOptions: {
        tabBarLabel: 'Shipping'
    }
    },
    Payment: {
      screen:PaymentStack,
    navigationOptions: {
        tabBarLabel: 'Payment'
    }
    }
  }, {
      swipeEnabled: false,
      initialRouteName: 'Address',
      tabBarOptions: {
          style: {
              backgroundColor: '#2EC9A7', elevation: 0
          },
          labelStyle: {
              fontSize: 13,
              fontWeight: 'bold'
          },
          indicatorStyle: {
            marginLeft: Dimensions.get('window').width*.14,
            backgroundColor: '#C09E67',
            width:10,
            height:10,
            borderRadius:5
          },
          activeTintColor: '#C09E67',
          inactiveTintColor: 'black',
        
       
      }
})