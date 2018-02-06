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
  state = {anim:false,
          slides:[{
          source:require('../images/img2.png'),
          Caption:'Iron Man'
        },{source:require('../images/img1.png'),
            Caption:'Tony Stark' },{source:require('../images/img2.png'),
                Caption:'Tony Stark' }],
        currentSlide:-1}
  componentDidMount(){
    setAnimation = this.setAnimation;
    this.setState({anim:false});
    setTimeout(function(){
      setAnimation()
    },1000)
  }

  render(){
    return (<View>
      <Text onPress= {this.setAnimation} style={styles.white}>SlideList</Text>
        {this.state.anim ? <Slide {...this.state.slides[this.state.currentSlide]} />:null}

      </View>)
  }
  setAnimation =()=>{
    const CustomLayoutAnimation = {
              duration: 5000,
              create:{
                type: LayoutAnimation.Types.easeOut,
                property: LayoutAnimation.Properties.opacity
              },
              update:{
                type: LayoutAnimation.Types.easeOut,
                property: LayoutAnimation.Properties.opacity
              },
              delete:{
                type: LayoutAnimation.Types.easeOut,
                property: LayoutAnimation.Properties.opacity
              }
            };
            var self = this;
            self.setState({anim:false})
  setTimeout(function(){
    LayoutAnimation.configureNext(CustomLayoutAnimation);
    // if(this.state.currentSlide<this.state.slides.length+1){
      self.setState({anim:true,currentSlide:self.state.currentSlide+1});
    //  setAnimation();
    // }
  },1000)

  setTimeout(function(){
    setAnimation()
  },5000)
  }
}
