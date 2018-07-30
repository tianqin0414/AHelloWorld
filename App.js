/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/*
TQ0730
 */
class CountDown extends Component {
  state = {
    count: 5,
  };
  renderResult = () =>{
    const { count } = this.state;
    if(count > 0){
      return <Text>{count}</Text>
    }
    else {
      return <text>时间到!</text>
    }
  }
  render() {
    const { count } = this.state;
    return (
      <view>{this.renderResult()}</view>
    )
  }
  componentDidMount() {
    this.timer = setTimeout (
      const { count } = this.state;
      if (count === 0) {
        //return clearInterval(this.timer);
         this.timer && clearTimeout();
      }
      this.setState({
        count: count - 1,
      });
    , 500);
  }
  componentWillUnmount() {
    //clearInterval(this.timer);
    this.timer && clearTimeout();
  }
}


class GoodMorning extends Component {
  render() {
    return (
      <Text>Good morning, {this.props.name}!</Text>
    )
  }
}


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <CountDown />
        <GoodMorning name="Sir" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
       textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
