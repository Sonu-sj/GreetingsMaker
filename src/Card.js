import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  LayoutAnimation
} from 'react-native';

import React, { Component } from 'react';
import styles from './StyleSheet.js';


const Card = (props)=>{

 return (<View>
<Image style={Lstyles.imgStyle} source={props.source}/>
</View>)

}

const Lstyles = StyleSheet.create({
imgStyle:{
  height:300,
  width:100,
  marginTop:20
}
});

export default Card;
