import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Alert, ScrollView } from 'react-native'
import LocalImageVisa from '../LocalImage/visaLocalImage'
import Icon from 'react-native-vector-icons/Ionicons'
import Button1 from '../ButtonWithBackground/Button1'
import Question from 'react-native-vector-icons/FontAwesome5'


class CardScreen extends Component {
    alertHolder=() => {
     Alert.alert(
      'Your Order is Finished!',
      "",
    [
      {text: 'OK', onPress: () => this.props.navigation.navigate('Address')},
    ],
      { cancelable: false }
     )
    }
    
render() {
 return (
   <ScrollView style={styles.container}>
     <View style={styles.nameContent}>
       <Text style={styles.nameText}>Scan your card</Text>
     </View>

    <View style={styles.cameraContent}>
      <View style={styles.holder}>
        <Icon name="ios-camera" size={35} color="gray"/>
          <Text style={styles.saveText}>Save time and scan your credit card</Text>
      </View>
    <View style={styles.proxy}>
    </View>
    </View>

    <View style={styles.creditCardContent}>
      <View style={styles.creditCardTitleContent}>
        <Text style={styles.CreditCardTitleText}>Credit Card #No</Text>
      </View>
    <View style={styles.cardTextInputContent}>
      <View style={styles.creditTextInputContent}>
        <TextInput style={styles.creditTextInput}/>
      </View>
    <View style={styles.iconContent}>
    <LocalImageVisa source={require('../../components/assets/visa.png')} 
      originalWidth={4060}
      originalHeight={1648}/>
    </View>
    </View>
    </View>

    <View style={styles.creditCardContent}>
      <View style={styles.TitleCreditHolder}>
        <Text style={styles.CreditCardTitleText}>Expires</Text>
      </View>
      <View style={styles.cardTextInputContent}>
        <View style={styles.creditTextInputContent}>
          <TextInput style={styles.expiresTextInput}/>
        </View>
        
    <View style={styles.iconContent}>
      <Question name="question-circle" size={20} color="#F38B4C" />
    </View>
    </View>
    </View>
              
    <View style={styles.footerTextsContent}>
      <View style={styles.termsContent}>
        <View style={styles.termsRow}>
          <View style={styles.checkBoxTermsContent}>
            <TextInput style={styles.checkBoxTermsText}/>
          </View>
        <View style={styles.agreeContent}>
          <Text style={styles.agreementText}>Agree to our terms and conditions</Text>
        </View>
        </View>
        </View>
     <View style={styles.agreementTextContent}>
       <Text style={styles.agreementContent}>I agree that i have read and accepted our</Text>
          <View style={styles.conditionsContent}>
            <Text style={styles.agreementContent2}>terms & conditions </Text>
              <Text style={styles.agreementContent3}>for your purchase
              </Text>
          </View>
          </View>
          </View>

    <View style={styles.buttonContent}>
      <Button1 onPress={this.alertHolder}>Finish your Order</Button1>
        </View>
    </ScrollView>
 )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    nameContent: {
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        margin: 10,
    },
    nameText: {
        fontSize: 15,
        color: '#BFBFBF'
    },
    creditTextInput:{
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
    },
    expiresTextInput:{
        width: '50%',
        borderColor: 'black',
        borderWidth: 1,
    },
    holder:{
        flex:4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    saveText:{
        fontSize:14,
        fontWeight: 'bold',
    },
    proxy:{
        flex:1
    },
    cameraContent: {
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin:10,
        marginVertical: 1
    },
    creditCardContent: {
        flex: .275,
        backgroundColor: 'white',
        flexDirection: 'column',
        margin:10
    },
    creditCardTitleContent:{
        flex:.4
    },
    cardTextInputContent:{
        flex:.4,
        flexDirection: 'row'
    },
    creditTextInputContent:{
        flex:3
    },
    iconContent:{
        alignItems: 'center',
        flex:1
    },
    footerTextsContent:{
        flex:.6,
    },
    termsContent:{
        flex:1.6,
        
    },
    termsRow:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBoxTermsContent:{
        flex:2,
        justifyContent: 'space-around',
        margin:10
    },
    agreeContent:{
        flex:8,
        marginRight: 95
    },
    checkBoxTermsText:{
        borderColor: 'black',
        borderWidth:1,
        width:25,
        height:25
    },
    agreementTextContent:{
        flex:1,
        marginLeft: 70,
        marginBottom: 60
    },
    agreementText:{
        fontSize:15,
        fontWeight: 'bold'
    },
    conditionsContent:{
        flexDirection: 'row'
    },
    agreementContent:{
        fontSize:15
    },
    agreementContent2:{
        color: '#F38B4C',
        fontSize:15
    },
    agreementContent3:{
        fontSize:15
    },
    buttonContent: {
        flex: .2
    },
    
})
export default CardScreen;