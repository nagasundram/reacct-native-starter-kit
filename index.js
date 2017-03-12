import React, { Component } from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';
import Login from './Login';
import Register from './Register';
import Home from './Home';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} title="Login" initial={true}/>
    <Scene key="register" component={Register} title="Sign Up"/>
    <Scene key="home" component={Home}/>
  </Scene>
);

export default class rnd extends Component {
  render() {
    return (
        <Router scenes={scenes} />
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

AppRegistry.registerComponent('rnd', () => rnd);
