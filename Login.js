import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  View,
  Text
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>Login</Text>
        <Text onPress={Actions.register}>Sign Up</Text>
        <Text onPress={Actions.home}>Home</Text>
      </View>
    )
  }
}