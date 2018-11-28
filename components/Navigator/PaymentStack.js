import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import PaymentScreen from '../screens/PaymentScreen'
import CardScreen from '../screens/CardScreen'


export default PaymentStack = createStackNavigator({
  Payment:PaymentScreen,
  Card:CardScreen
    
},
    {
        initialRouteName: 'Payment',
        navigationOptions:{
            header:null
        }
    }

    
)