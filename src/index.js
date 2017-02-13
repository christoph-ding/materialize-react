import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class TestApp extends React.Component{
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="click me"/>
      </MuiThemeProvider>
    )
  }
}

render(<TestApp/>, document.getElementById('mount-point'));

