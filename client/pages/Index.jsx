import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { requestKittens } from '../actions/kittens';

import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';

import Logo from '../svg/InvengineLogo.svg';
// console.log('ayyyyy', pic);

export default class Index extends Component {
  // constructor(props){
  //   super(props);
  //   // const { children} = this.props;
  //   // console.log(this.props.push);
  // }

  componentDidMount() {
    this.props.requestKittens();
  }

  // handleClick(){
  //   console.log('bong');
  //   console.log('routeActions :', routeActions);
  //   () => routeActions.push('/foo')
  // }

  render () {
    const { sheet, children } = this.props;
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
              onClick={() => browserHistory.push('/home')} />
            </span>
            <span style={STYLES.barButton}>
              <FlatButton style={STYLES.barButtonTxt} label= 'Import'
              onClick={() => browserHistory.push('/')} />
            </span>
            <span style={STYLES.barButton}>
              <FlatButton style={STYLES.barButtonTxt} label= 'Invite'
              onClick={() => browserHistory.push('/invite')} />
            </span></span>}
        />
        {this.props.children}
   </div>);
  }
}

//   render() {
//     const { sheet, push, children } = this.props;

//     return (
//     <div>
//       <header>
//         Links:
//         {' '}
//         <Link to='/'>bar</Link>
//         {' '}
//         <Link to='/foo'>Foo</Link>
//         {' '}
//         <Link to='/kittens'>kittens</Link>
//       </header>
//       <div>
//         <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
//       </div>
//       <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
//     </div>
//     )
//   }
// }


const STYLES = {
  title: {
    cursor: 'pointer',
    color: Colors.indigo500
  },
  index: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDDDD',
    color: '#660000'
  },
  kitten: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '33%',
    padding: '0.5rem',
    boxSizing: 'border-box'
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
    top:6
  },
  logowrap: {
    position: 'relative',
    bottom:2
  }
};


export default connect(
  () => ({}),
  { requestKittens }
)(
  useSheet(Index, STYLES)
);
