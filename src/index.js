import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// MUI components
import RaisedButton from 'material-ui/RaisedButton';

class TestApp extends React.Component{
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <Button />
      </MuiThemeProvider>        
      </div>
    )
  }
}

class Button extends React.Component{
  render() {
    return (
        <RaisedButton label="Raised Button"/>
    )
  }
}

render(<TestApp/>, document.getElementById('mount-point'));
