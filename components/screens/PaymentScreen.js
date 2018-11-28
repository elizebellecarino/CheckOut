import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import LocalImageApple from '../LocalImage/appleLocalImage'
import LocalImageVisa from '../LocalImage/visaLocalImage'
import LocalImagePaypal from '../LocalImage/paypalLocalImage'
import LocalImageJcb from '../LocalImage/jcbLocalImage'
import LocalImageMC from '../LocalImage/mastercardLocalImage'
import Button1 from '../ButtonWithBackground/Button1'

class PaymentScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textInputNameContent}>
          <View>
            <Text style={styles.yourNameText}>How do you wish to pay?</Text>
          </View>
        </View>
                
        <View style={styles.shippingContent1}>
          <View style={styles.iconContent}>
            <TextInput style={styles.checkBox}/>
              <LocalImageVisa
                source={require('../../components/assets/visa.png')} 
                originalWidth={4060}
                originalHeight={1648} />
               <LocalImageMC
                  source={require('../../components/assets/masterCard.png')} 
                  originalWidth={500}
                  originalHeight={311}
                />
                <LocalImageJcb
                  source={require('../../components/assets/jcb.png')} 
                  originalWidth={900}
                  originalHeight={520} />
          </View>
                
          <View style={styles.textTitleContent}>
            <Text style={styles.titleText}>Creditcard</Text>
              <Text style={styles.subtitle}>Visa, Mastercard, JCB, Amex</Text>
          </View>
        </View>

        <View style={styles.shippingContent2}>
          <View style={styles.iconContent}>
            <TextInput style={styles.checkBox}/>
              <LocalImagePaypal
                source={require('../../components/assets/paypal.png')} 
                originalWidth={1600}
                originalHeight={456} />
          </View>
          <View style={styles.textTitleContent}>
            <Text style={styles.titleText}>Paypal</Text>
              <Text style={styles.subtitle}>paypalaccount@gmail.com</Text>
          </View>
         </View>

        <View style={styles.shippingContent3}>
          <View style={styles.iconContent}>
            <TextInput style={styles.checkBox}/>
              <LocalImageApple
                source={require('../../components/assets/apple.png')} 
                originalWidth={1192}
                originalHeight={512} />
          </View>
          <View style={styles.textTitleContent}>
            <Text style={styles.titleText}>ApplePay</Text>
              <Text style={styles.subtitle}>applepay@gmail.com</Text>
          </View>
        </View>
              
       <View style={styles.footerTextContent}>
       </View>

       <View style={styles.buttonContent}>
         <Button1 onPress={() => this.props.navigation.navigate('Card')}>Next Step</Button1>
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
    iconContent:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textTitleContent:{
        flex:1,
        alignItems: 'center',
    },
    titleText:{
        fontSize:21,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        
    },
    subtitle:{
        color: '#D9D9D9',
        fontSize:13,
        alignSelf: 'flex-end',
    },
    yourNameText: {
        fontSize: 15,
        color: '#BFBFBF'
    },

    shippingContent1: {
        flex: .5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:10
    },
    shippingContent2: {
        flex: .5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:10
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
        borderColor: 'black',
        
        marginRight: 25,
    },
    footerTextContent:{
        flex: 1.6,
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
    addressTextContent:{
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
        flex: .4
    },
 
})
export default PaymentScreen;