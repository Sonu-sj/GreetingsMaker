//container
import {
  Platform,
  StyleSheet,
  Text,
  View,
  LayoutAnimation
} from 'react-native';
import React, { Component } from 'react';

import styles from './StyleSheet.js'

import Slide from './Slide.js'



export default class  SlideList extends Component<{}>{
  state = {anim:false};
  componentDidMount(){
    setAnimation = this.setAnimation;
    setTimeout(function(){
      setAnimation()
    },1000)
  }

  render(){
    return (<View>
      <Text onPress= {this.setAnimation} style={styles.white}>SlideList</Text>
        {this.state.anim ? <Slide/>:null}

      </View>)
  }
  setAnimation =()=>{
    const CustomLayoutAnimation = {
              duration: 5000,
              create:{
                type: LayoutAnimation.Types.easeOut,
                property: LayoutAnimation.Properties.opacity
              }
            };
  LayoutAnimation.configureNext(CustomLayoutAnimation);
  this.setState({anim:true})

  }
}
