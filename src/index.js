import React from 'react';
import { render } from 'react-dom';

class TestApp extends React.Component{
  render() {
    return (
      <h1 className="header center teal-text text-lighten-2"> Heya </h1>
    )
  }
}

render(<TestApp/>, document.getElementById('mount-point'));

