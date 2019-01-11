/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, WebView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  showSpinner() {
    this.setState({ visible: true });
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    let web = 'https://www.instagram.com/';

    return (
      <View style={{ flex: 1 }}>
        <Spinner
          visible={this.state.visible}
          textContent={'Loading...'}
          textStyle={{ color: '#fff' }}
        />
        <WebView
          scalesPageToFit
          source={{ uri: web }}
          onLoadStart={() => (this.showSpinner())}
          onLoad={() => (this.hideSpinner())}
        />
      </View>
    )
  }
}
