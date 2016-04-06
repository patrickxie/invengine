import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import URL from '../components/URL';
import { sendInvites } from '../actions/config_variables';
import RaisedButton from 'material-ui/lib/raised-button';
import Snackbar from 'material-ui/lib/snackbar';
import Colors from 'material-ui/lib/styles/colors';

export default class Send extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { sendInvites, sent } = this.props;
    return (<div>
             <URL/>
        <div style={STYLES.container}>
           <div style={STYLES.divider}/>
        </div>
        <div style={STYLES.buttongrouper}>
        <RaisedButton
          label='back'
          style={STYLES.sendbutton}
          onTouchTap={() => browserHistory.push('/invite')}
        />
        <RaisedButton
          label='Confirm'
          style={STYLES.sendbutton}
          onTouchTap={sendInvites}
        />
        </div>
        <Snackbar
        open={sent}
        message={'invites have been sent.'}
        autoHideDuration={2000}
        bodyStyle={STYLES.snackbar}
        />
        </div>);
  }
}

const STYLES = {  
  snackbar: {
    backgroundColor: Colors.grey300,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  container: {
    textAlign: 'center',
    // height: '13rem',
    margin: 'auto',
    width: '90%',
    position: 'relative',
    // top:20,
    // display:'span'
  },
  buttongrouper: {
    textAlign: 'center'
  },
  sendbutton: {
    marginLeft: 12
  }
}
export default connect(
  state => ({ sent: state.configvars.invite_done  }),
  { sendInvites }
)(Send);
