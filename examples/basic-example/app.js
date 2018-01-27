/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import IsometricGrid, { Cell } from '../../src';

import img1 from './img/1.jpg';

class App extends Component {
  render() {
    return (
      <IsometricGrid
        cells={[
          <Cell key={1} layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />,
        ]}
        shadow
        style={{ height: '800px', width: '100%' }}
      />
    );
  }
}

export default App;
