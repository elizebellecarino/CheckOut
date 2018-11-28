import React,{ Component }  from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import AddressScreen from '../screens/AddressScreen'
import ShippingScreen from '../screens/ShippingScreen';
import PaymentScreen from '../screens/PaymentScreen';
import  TopTabNavi  from './TopTabNav';



export default StackNavi = createStackNavigator({
        Home:{
            screen:TopTabNavi,
            navigationOptions: {
            headerTintColor: 'white',
              title: "Checkout",
               headerStyle:{
               backgroundColor:"#2ABB9C",
               textAlign:"center",
                width:"100%"
                },
                headerLeft:
                  <Icon name="ios-menu" size={30} color="white" style={{marginLeft:10}} />
            
            }
         },
    },
    {

      headerLayoutPreset:"center"    
        
        
    })