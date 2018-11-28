import React, { Component } from 'react'
import {Image, Dimensions} from 'react-native'

  const LocalImagePaypal = ({source, originalWidth, originalHeight}) => {
    let windowWidth = Dimensions.get('window').width
    let widthChange = (windowWidth-250)/originalWidth
    let newWidth = (originalWidth * widthChange)
    let newHeight = (originalHeight * widthChange)
    return(

        <Image source={source} style={{width: newWidth, height: newHeight}}/>
      )
  }

  export default LocalImagePaypal;