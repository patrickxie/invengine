import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import URL from '../components/URL';
import CustomNotif from '../components/Notification';
import { sendInvites } from '../actions/config_variables';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';
import * as _ from 'lodash';

import { actions as notifActions, Notifs } from 're-notif';
const { notifSend, notifClear } = notifActions;

export default class Send extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { sendInvites, notifSend } = this.props;
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
          onTouchTap={_.debounce(sendInvites, 3000, {
            leading: true,
            trailing: false
          })}
        />
        </div>
        <Notifs CustomComponent={CustomNotif}/>
        </div>);
  }
}
    //     <RaisedButton
    //       label='Test Notification, remove later'
    //       style={STYLES.sendbutton}
    //       onTouchTap={notifSend.bind(this,{ message: 'hello world',
    // dismissAfter: 2000 } )}

    //     />

        // <Snackbar
        // open={sent}
        // message={'invites have been sent.'}
        // autoHideDuration={2000}
        // bodyStyle={STYLES.snackbar}
        // />

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
  state => ({   }),
  { sendInvites, notifSend }
)(Send);
