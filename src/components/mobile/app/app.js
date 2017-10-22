import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {

  /**
   * @param {number} a - this is a value.
   * @param {number} b - this is a value.
   * @return {number} result of the sum value.
   */

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>Hello Mobile!!</Text>
      </View>
    );
  }
}

export default App;
