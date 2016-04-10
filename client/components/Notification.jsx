
import React, { Component } from 'react';
import Snackbar from 'material-ui/lib/snackbar';
import Colors from 'material-ui/lib/styles/colors';


export default class CustomNotif extends Component {
  render() {
    const { kind } = this.props;
    return (<Snackbar
            open={!!this.props.message}
            message={this.props.message}
            autoHideDuration={2000}
            bodyStyle={STYLES[kind]}
            onRequestClose={()=>{}}
            />);
  }
}

const STYLES = {
  snackbar: {
    backgroundColor: Colors.blueGrey200,
    textAlign: 'center'
  },
  info: {
    backgroundColor: Colors.blueGrey200,
    textAlign: 'center'
  },
  warning: {
    backgroundColor: Colors.red500,
    textAlign: 'center'
  }
}
