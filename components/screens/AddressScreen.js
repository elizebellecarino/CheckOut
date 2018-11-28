import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native'
import Button1 from '../ButtonWithBackground/Button1'

class AddressScreen extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.nameTextInputContent}>
          <View style={styles.nameContent}>
            <Text style={styles.yourNameText}>Your Name</Text>
          </View>
        
        <View style={styles.textInputContent}>
          <View style={styles.firstNameContent}>
            <TextInput style={styles.firstNameTextInput} placeholder="First Name"/>
          </View>
            <View style={styles.lastNameContent}>
              <TextInput style={styles.lastNameTextInput} placeholder="Last Name"/>
                </View>

        </View>
        </View>

       <View style={styles.addressContent}>
         <View style={styles.addressTextContent}>
           <Text style={styles.addressText}>Address line </Text>
         </View>
         <View style={styles.addressTextInputContent}>
           <TextInput style={styles.addressTextInput}/>
         </View>
      </View>

      <View style={styles.addressContent2}>
        <View style={styles.addressTextContent2}>
          <Text style={styles.addressText2}>Address line 2</Text>
        </View>

      <View style={styles.addressTextInputContent2}>
        <TextInput style={styles.addressTextInput2}/>
      </View>
      </View>

      <View style={styles.cityZipContent}>
        <View style={styles.cityTextInputContent}>
          <View style={styles.cityTextContent}>
            <Text style={styles.cityText}>City</Text>
          </View>
            <View style={styles.cityInputContent}>
              <TextInput style={styles.cityTextInput}/>
            </View>
        </View>

        <View style={styles.zipTextInputContent}>
          <View style={styles.zipTextContent}>
            <Text style={styles.zipText}>Zip</Text>
          </View>
        <View style={styles.zipInputContent}>
          <TextInput style={styles.zipTextInput}/>
        </View>
        </View>
        </View>

        <View style={styles.stateCountryContent}>
          <View style={styles.stateTextInputContent}>
            <View style={styles.stateTextContent}>
              <Text style={styles.stateText}>State</Text>
            </View>
          <View style={styles.stateInputContent}>
            <TextInput style={styles.stateTextInput}/>
          </View>
          </View>

        <View style={styles.countryTextInputContent}>
          <View style={styles.countryTextContent}>
            <Text style={styles.countryText}>Country</Text>
          </View>
        <View style={styles.countryInputContent}>
          <TextInput style={styles.countryTextInput}/>
        </View>
        </View>
       </View>

      <View style={styles.shippingTextContent}>
        <Text style={styles.shippingText}>Shipping Options</Text>
          <Text style={styles.shipAddressText}>Please ship to another address</Text>
      </View>

      <View style={styles.buttonContent}>
        <Button1 onPress={() => this.props.navigation.navigate('Shipping')}>Next Step</Button1>
      </View>

    </ScrollView>
  )}
}
  const styles = StyleSheet.create({
    container:{ 
      flex: 1,
      backgroundColor: 'white'
    },
    nameTextInputContent:{
      flex: 1.6,
      backgroundColor: 'white'
    },
    nameContent:{
      marginVertical: 5,
      flex: .5,
      justifyContent: 'flex-end',
      marginLeft: 10,
    },
    yourNameText:{
      fontSize: 15,
      color: '#BFBFBF'
    },
    textInputContent:{
      flex: 1,
      flexDirection: 'row',
    },
    firstNameContent:{
      flex: 1,
      backgroundColor: 'white',
      margin: 10,
    },
    firstNameTextInput:{
      width: '100%',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'black'
    },
    lastNameContent:{
      flex: 1,
      backgroundColor: 'white',
      margin: 10,
    },
    lastNameTextInput:{
      width: '100%',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'black'
    },
    addressContent:{
      flex:1,
      backgroundColor:"white"
    },
    addressTextContent:{
      flex: .5,
      justifyContent: 'flex-end',
      marginLeft: 10,
    },
    addressText:{
      fontSize: 15,
      color: '#BFBFBF',
    },
    addressTextInputContent:{
      flex: 1,
      backgroundColor: 'white',
      margin: 10,
    },
    addressTextInput:{
      width: '100%',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'black'
    },
    addressContent2:{
      flex: 1,
      backgroundColor:"white"
    },
    addressTextContent2:{
      flex:.5,
      justifyContent: 'flex-end',
      marginLeft: 10,
    },
    addressText2:{
      fontSize: 15,
      color: '#BFBFBF',
    },
    addressTextInputContent2:{
      flex: 1,
      backgroundColor:'white',
      margin: 10,
    },
    addressTextInput2:{
      width: '100%',
      backgroundColor: 'white',
      borderWidth:1,
      borderColor: 'black'
    },
    cityZipContent:{
      flex: 1.2,
      flexDirection: 'row'
    },
    cityTextInputContent:{
      flex: 1,
    },
    cityTextContent:{
      flex: .5,
      justifyContent: 'flex-end',
      marginLeft: 10,
    },
    cityText:{
      fontSize:15,
      color: '#BFBFBF'
    },
    cityInputContent:{
      flex: 1.5,
      backgroundColor: 'white',
      margin: 10,
    },
    cityTextInput:{
      borderWidth: 1,
      borderColor: 'black',
      width: '100%'
    },
    zipTextInputContent:{
      flex: 1,
    },
    zipTextContent:{
      flex: .5,
      justifyContent: 'flex-end',
      marginLeft: 10,
    },
    zipText:{
      fontSize: 15,
      color: '#BFBFBF'
    },
    zipInputContent:{
      flex: 1.5,
      backgroundColor: 'white',
      margin: 10,
    },
    zipTextInput:{
      borderWidth: 1,
      borderColor: 'black',
      width: '100%'
    },
    stateCountryContent:{
      flex: 1.2,
      flexDirection: 'row'
    },
    stateTextInputContent:{
      flex: 1,
    },
    stateTextContent:{
      flex: .5,
      justifyContent: 'flex-end',
      marginLeft: 10,
    },
    stateText:{
      fontSize: 15,
      color: '#BFBFBF'
    },
    stateInputContent:{
      flex: 1.5,
      backgroundColor: 'white',
      margin: 10,
    },
    stateTextInput:{
      borderWidth: 1,
      borderColor: 'black',
      width: '100%'
    },
    countryTextInputContent:{
      flex: 1,
    },
    countryTextContent:{
      flex: .5,
      justifyContent: 'flex-end',
      marginLeft: 10,
    },
    countryText:{
      fontSize: 15,
      color: '#BFBFBF'
    },
    countryTextInput:{
      borderWidth: 1,
      borderColor: 'black',
      width: '100%'
    },  
    countryInputContent:{
      flex: 1.5,
      backgroundColor: 'white',
      margin: 10,
    },
    shippingTextContent:{
      flex: .5,
      backgroundColor: 'white',
      margin: 10,
      justifyContent: 'space-around'
    },
    shippingText:{
      fontSize: 16,
      color: '#C9C9C9'
    },
    shipAddressText:{
      fontSize: 14,
      color: '#F5AB7D'
    },
    buttonContent:{
      flex: .5  
    }
 })

 export default AddressScreen;