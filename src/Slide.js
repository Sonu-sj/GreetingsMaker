
import {
  Platform,
  StyleSheet,
  Text,
  View,
  LayoutAnimation
} from 'react-native';
import React, { Component } from 'react';
import styles from './StyleSheet.js'


//Smaller container

//Placeholder

//will show text and pass image source
//container
import Card from './Card.js';

const Slide = (props)=>{

  return (<View>
  <Text style={styles.white}>Slide {props.Caption}</Text>
  <Card {...props}/>
  </View>
)


}
export default Slide;
