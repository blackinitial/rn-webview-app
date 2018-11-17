/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class App extends Component {
  render() {
    let web = 'https://dev.airbinder.co.id/mobile/';

    return (
      <WebView
        source={{uri: web}}
        style={{marginTop: 20}}
      />
    )
  }
}
