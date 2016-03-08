import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import Logo from '../svg/InvengineLogo.svg';


export default class Index extends Component {
  render () {
    const { sheet } = this.props;
    return (
     <div>
        <AppBar style={STYLES.appbar}
        title={<span style={STYLES.title}>Invengine</span>}
        iconElementLeft={<IconButton>
                         <div className={sheet.classes.logowrap}> <Logo width={35} height={28}/></div>
                        </IconButton>}
        iconElementRight={<span>
            <span style={STYLES.barButton}>
              <FlatButton style={STYLES.barButtonTxt} label= 'Home'
              onClick={() => browserHistory.push('/home')} 
              onTouchTap={() => browserHistory.push('/home')}/>
            </span>
            <span style={STYLES.barButton}>
              <FlatButton style={STYLES.barButtonTxt} label= 'Import'
              onClick={() => browserHistory.push('/')} 
              onTouchTap={() => browserHistory.push('/')}/>
            </span>
            <span style={STYLES.barButton}>
              <FlatButton style={STYLES.barButtonTxt} label= 'Invite'
              onClick={() => browserHistory.push('/invite')} 
              onTouchTap={() => browserHistory.push('/invite')}/>
            </span></span>}
        />
        {this.props.children}
   </div>);
  }
}




const STYLES = {
  title: {
    cursor: 'pointer',
    color: Colors.indigo500
  },
  button: {
    padding: '1rem 1.5rem',
    background: '#FFAAAA',
    '&:hover': {
      background: '#FFBBBB'
    },
    border: 0,
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    userSelect: 'none'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& svg': {
      fill: 'currentColor'
    }
  },
  appbar: {
    backgroundColor: Colors.grey20,
  },
  barButton: {
    flexBasis:'10%'
  },
  barButtonTxt: {
    color: Colors.indigoA200,
    position: 'relative',
    top:6,
    cursor: 'pointer'
  },
  logowrap: {
    position: 'relative',
    bottom:2
  }
};


export default connect(
  () => ({}),
  // {  }
)(
  useSheet(Index, STYLES)
);
