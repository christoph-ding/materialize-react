'use strict';
import React from 'react';
import { render } from 'react-dom';

class TestApp extends React.Component{
  render() {
    return (
      <h1> Heya </h1>
    )
  }
}

render(<TestApp/>, document.getElementById('mount-point'));
