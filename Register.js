import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  View,
  Text
} from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>Register</Text>
        <Text onPress={Actions.login}>Login</Text>
        <Text onPress={Actions.home}>Home</Text>
      </View>
    )
  }
}