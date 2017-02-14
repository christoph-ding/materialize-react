import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// MUI components
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class TestApp extends React.Component{
  render() {
    return (
      <div>
        <Button />
        <NavBar />
        <AutoCompleteForm />
        <ExampleBadge />
      </div>
    )
  }
}

class Button extends React.Component{
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Raised Button"/>
      </MuiThemeProvider>
    )
  }
}

class NavBar extends React.Component{
  handleClick() {
    console.log('hello!');
  }

  styles() {
    return {
      cursor: 'pointer'
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <AppBar 
        title={<span style={this.styles()}>Title</span>}
        onClick={this.handleClick}
        />
      </MuiThemeProvider>
    )
  }
}

class AutoCompleteForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      data: ['cat', 'dog', 'wolf', 'bird', 'fish', 'tiger']
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <AutoComplete
        dataSource={this.state.data}
        hintText="Autocomplete"
        />
      </MuiThemeProvider>
    )
  }
}

class ExampleBadge extends React.Component{
  render() {
    return (
      <MuiThemeProvider>
        <Badge badgeContent={'4'}>
              <NotificationsIcon />
        </Badge>
      </MuiThemeProvider>
    )
  }
}

render(<TestApp/>, document.getElementById('mount-point'));
