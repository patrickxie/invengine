import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import URL from '../components/URL';
import { sendInvites } from '../actions/config_variables';
import RaisedButton from 'material-ui/lib/raised-button';


export default class Send extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { sendInvites } = this.props;
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
        </div>);
  }
}

const STYLES = {
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
  state => ({  }),
  { sendInvites }
)(Send);
