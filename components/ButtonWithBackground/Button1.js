import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const Button1 = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,{backgroundColor:'#F38B4C'},props.border]}> 
            <Text style={[{color:"white"},props.textColor, props.textWeight]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
      alignItems: 'center',
      width:"90%",
      alignSelf:"center"
    }
})

export default Button1;