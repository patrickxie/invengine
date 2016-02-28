
import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { inputUrl } from '../actions/assist_variables';

import { browserHistory } from 'react-router';

import URL from '../components/URL';

import FacebookBoxIcon from '../svg/facebook-box.svg';
import FacebookMessengerIcon from '../svg/facebook-messenger.svg';
import TW from '../svg/twitter.svg';
import SC from '../svg/snapchat.svg';
import FB from '../svg/facebook.svg';
import RE from '../svg/reddit.svg';
import PI from '../svg/pinterest.svg';
import IN from '../svg/instagram.svg';
import EM from '../svg/email.svg';
import GO from '../svg/google-plus.svg';

import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';




// import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';

export default class Invitepage extends Component {
  // constructor(props){
  //   super(props);
  //   // const { children} = this.props;
  //   // console.log(this.props.push);
  // }

  componentDidMount() {
    // this.props.requestKittens();
  }

  handleClick(){
    alert('bong');
    // console.log('routeActions :', routeActions);
    // () => routeActions.push('/foo')
  }

  render () {
    const { invitees } = this.props;
    console.log('invitees are: ', invitees);

    const headerBar = (<div style={STYLES.container} >
    <div style={STYLES.unit}><EM/></div>
    <div style={STYLES.unit}><FB/></div>
    <div style={STYLES.unit}><TW/></div>
    <div style={STYLES.unit}><GO/></div>
    <div style={STYLES.unit}><RE/></div>
    <div style={STYLES.unit}><IN/></div>
    <span style={STYLES.stretch}></span>
    </div>);

    return <div><URL/><h1 onDoubleClick={this.handleClick}>
      'hello'</h1> <Divider/>
      <div style={STYLES.parent}>
          <div style={STYLES.left}>
            <List subheader='Currently only email is working, the rest will be implemented soon!'>

            </List>
          </div>
          <div style={STYLES.right}>
            <List>
              <ListItem>{headerBar}</ListItem>

            </List>
          </div>
      </div>
       <div className='dirty'/>
  </div>;
  }
}

// style={STYLES.t2}
// <div style={STYLES.test}>  </div>
    // <span style={STYLES.unit}><ToolbarSeparator  /></span>
//
    // <List subheader='Currently only email is working, the rest will be implemented soon!'>
    //     <ListItem>{headerBar}</ListItem>
    //     {invitees.map(person => (
    //       <ListItem key={person.key}
    //     primaryText={person.first_name+' '+ person.last_name}
    //     leftAvatar={<Avatar src={person.picture[0].medium}/>} />
    //     ))}

    // </List>


        // {invitees.map(person => (
        //   <ListItem key={person.key}
        // primaryText={person.first_name+' '+ person.last_name}
        // leftAvatar={<Avatar src={person.picture[0].medium}/>} />
        // ))}


const STYLES = {
  unit:{
    width: '16.6%',
    display: 'inline-block',
    textAlign: 'center',
    zoom: 1

  },
  icons:{
    fill:'blue',
  },
  container:{
    fill:'#000080',
    // border: '1px solid #c3c3c3',
    textAlign: 'justify',
    MsTextJustify: 'distribute-all-lines',
    textJustify: 'distribute-all-lines',

  },
  stretch:{
    width: '100%',
    display: 'inline-block',
    fontSize: 0,
    lineHeight: 0
  },
  left: {
    width: '30%',
    display: 'inline-block',
    height: '300px',
    backgroundColor: 'pink'
  },
  right: {
    width: '70%',
    height: 300,
    display: 'inline-block',
    backgroundColor: 'yellow'
  },
  whitebg: {
    backgroundColor: 'white',
  },
  floatButton: {
    left: '10%',
    bottom: '10%',
    backgroundColor: '#fab1ce'
  },
  snackbar:{
    backgroundColor: 'yellow',
    fill: '#FFDDDD'
  },
  test:{
    width:'100%',
    height:'3em',
    backgroundColor: 'pink',
  }
};

export default connect(
  state => ({ invitees: state.data.filter((item)=>state.toinvlist[item.key]===true) }),
  // { requestAPIData, changeSort }
)(
  useSheet(Invitepage, STYLES)
);