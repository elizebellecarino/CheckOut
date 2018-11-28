import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import LocalImageDhl from '../LocalImage/dhlLocalImage'
import LocalImageUps from '../LocalImage/upsLocalImage'
import LocalImageFedex from '../LocalImage/fedexLocalImage'
import Button1 from '../ButtonWithBackground/Button1'
import Icon from 'react-native-vector-icons/Ionicons'

class ShippingScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textInputNameContent}>
          <View>
            <Text style={styles.yourNameText}>Which shipping partner do you like?</Text>
          </View>
        </View>
          
          <View style={styles.shippingContent1}>
            <View style={styles.iconContent}>
              <TextInput style={styles.checkBox}/>
                <LocalImageDhl
                  source={require('../../components/assets/dhl.png')} 
                  originalWidth={2000}
                  originalHeight={443} />
            </View>
          <View style={styles.textTitleContent}>
            <Text style={styles.textTitle}>DHL</Text>
              <Text style={styles.subtitle}>No Additional Costs</Text>
          </View>
          </View>

          <View style={styles.shippingContent2}>
            <View style={styles.iconContent}>
              <TextInput style={styles.checkBox}/>
                <LocalImageUps
                  source={require('../../components/assets/ups.png')} 
                  originalWidth={768}
                  originalHeight={914} />
                </View>
          <View style={styles.textTitleContent}>
            <Text style={styles.textTitle}>UPS</Text>
              <Text style={styles.subtitle}>No Additional Costs</Text>
          </View>
          </View>

          <View style={styles.shippingContent3}>
            <View style={styles.iconContent}>
              <TextInput style={styles.checkBox}/>
                <LocalImageFedex
                  source={require('../../components/assets/fedex.png')} 
                  originalWidth={5000}
                  originalHeight={2281} />
             </View>
          <View style={styles.textTitleContent}>
            <Text style={styles.textTitle}>FEDEX EXPRESS</Text>
              <Text style={styles.subtitle}>Additional 12.99$</Text>
          </View>
          </View>
              
         <View style={styles.shippingAddressTextContent}>
           <View style={styles.shippingTitleContent}>
             <View style={styles.shippingContent}>
               <Text style={styles.shippingTitleText}>Shipping Address</Text>
                 <Icon name="ios-paper" size={30} color="#D2D2D2" />
             </View>
         <View style={styles.half}>
         </View>
           </View>

          <View style={styles.addressTextsContent}>
            <Text style={styles.textAddress}>Johnny Doe</Text>
              <Text style={styles.textAddress}>11144 Military Trail (North)</Text>
                <Text style={styles.textAddress}>Apartment #3122</Text>
                  <Text style={styles.textAddress}>23122 Palo Alot</Text>
                    <Text style={styles.textAddress}>California, United States</Text>
          </View>
         </View>

         <View style={styles.buttonContent}>
           <Button1 onPress={() => this.props.navigation.navigate('Payment')}>Next Step</Button1>
         </View>
      </ScrollView>
  )}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textInputNameContent: {
        flex: .3,
        backgroundColor: 'white',
        justifyContent: 'center',
        margin: 10,

    },
    yourNameText: {
        fontSize: 15,
        color: '#BFBFBF'
    },
    iconContent:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTitleContent:{
        flex: 1,
    },
    textTitle:{
        fontSize: 21,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        
    },
    subtitle:{
        color: '#D9D9D9',
        fontSize: 13,
        alignSelf: 'flex-end',
    },
    shippingContent1: {
        flex: .5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    shippingContent2: {
        flex: .5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    shippingContent3: {
        flex: .5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    checkBox:{
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor:'black',
        
        marginRight: 25,
    },
    shippingAddressTextContent:{
        flex: 1.6,
        borderColor: '#E6E6E6',
        borderTopWidth: 1
    },
    shippingTitleContent:{
        flex: .3,
        flexDirection: 'row'
    },  
    shippingContent:{
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        
        
    },
    addressTextsContent:{
        flex: 1,
        justifyContent: 'flex-start',
        margin: 10,
    },
    shippingTitleText:{
        fontSize: 18,
        color: '#BFBFBF',
        marginRight: 18
    },
    textAddress:{
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
     half:{
        flex: 1
    },
    buttonContent: {
        flex: .6,
        marginVertical: 5
    },
 
})
export default ShippingScreen;