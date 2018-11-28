import React, { Component } from 'react'
import {Image, Dimensions} from 'react-native'
import LocalImageUps from './upsLocalImage';

  const LocalImageDhl = ({source, originalWidth, originalHeight}) => {
    let windowWidth = Dimensions.get('window').width
    let widthChange = (windowWidth-280)/originalWidth
    let newWidth = (originalWidth * widthChange)-5
    let newHeight = (originalHeight * widthChange)+3
    return(

        <Image source={source} style={{width: newWidth, height: newHeight}}/>
      )
  }

  export default LocalImageDhl;