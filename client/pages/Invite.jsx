
import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { populateIconTable } from '../actions/assist_variables';

import { browserHistory } from 'react-router';

import URL from '../components/URL';
import InviteTable from '../components/InviteTable';

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

import Toggle from 'material-ui/lib/toggle';

// import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';

import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';

export default class Invitepage extends Component {
  constructor(props){
    super(props);
    const { invitees } = this.props;
     // console.log('invitees constructor are: ', invitees);
    // this.props.populateIconTable(this.props.invitees);
    // const go = <div/>;
   
  }

//   componentDidMount(){
//     console.log('mounted@@@@@@');
//     console.log('this.props.channel is: ', this.props.channels);
//     console.log('this.props.channel is: ', JSON.stringify(this.props.channels));
//      console.log('this.props.channels2 are: ', this.props.channels[0]);
//     console.log('this.props.channels3 are: ', this.props.channels[0].EM);

//     this.go =  (this.props.invitees.map((person, i) => (
//           <ListItem key={i}
//         primaryText={person.first_name+' '+ person.last_name}
//         leftAvatar={<Avatar src={person.picture[0].medium}/>}>
//             {this.props.channels[0].EM? 
//  <div style={STYLES.container} >
//   <div style={STYLES.On}
//   onTouchTap={this.props.channelIconToggle.bind(this,i,'EM', true)}><EM/>{i}</div>
//  </div>
//  :
//   <div style={STYLES.container} >
//   <div style={STYLES.Off}
//   onTouchTap={this.props.channelIconToggle.bind(this,i,'EM', true)}><EM/>{i}</div>
//  </div>
// }

//           </ListItem>
     
// )));
// console.log('finish executing didmount');
//   }

  componentDidMount(){
     this.props.populateIconTable(this.props.invitees);
  }


  render () {
        // const { invitees, channels, channelIconToggle } = this.props;
        // const { channels } = this.props;
    // console.log('invitees are: ', this.props.invitees);
    // console.log('channels are: ', JSON.stringify(this.props.channels));
    // console.log('this.props.channels2 are: ', this.props.channels[0]);
    // console.log('this.props.channels3 are: ', this.props.channels[0].EM);
    // console.log('channels2 are: ', channels[0]);
    // console.log('channels3 are: ', channels[0].EM);
    // console.log(i);
    // console.log('GO shud be null', this.go);

    return (<div><URL/><h5>
        email is only option working right now, all the others are features coming soon!</h5> <Divider/>
       <InviteTable/>
  </div>);
  }
}
// need same height for all listItem, in fact need same CSS style for all listitem

    // <div style={STYLES.toggle}><Toggle thumbStyle={STYLES.testbg2} defaultToggled={true} /></div>

const STYLES = {
  listItem:{
    height:'100',
    border: '1px solid #c3c3c3',
  },
  On:{
    fill:'#000080',
    width: '14.2%',
    display: 'inline-block',
    textAlign: 'center',
    // backgroundColor:'red',
    zoom: 1

  },
  Off:{
    fill:'grey',
    width: '14.2%',
    display: 'inline-block',
    textAlign: 'center',
    zoom: 1
  },
  icons:{
    fill:'blue',
  },
  parent:{
    backgroundColor:'cyan',
    display: 'block'
  },
  container:{
    // fill:'#000080',
    textAlign: 'justify',
    // MsTextJustify: 'distribute-all-lines',
    textJustify: 'distribute-all-lines',
    width: '70%',
    position: 'absolute',
    right: '0px'
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
    // height: '300px',
    // backgroundColor: 'pink'
  },
  right: {
    width: '70%',
    // height: 300,
    display: 'inline-block',
    // backgroundColor: 'purple'
  },
  testbg: {
    backgroundColor: 'magenta',
  },
  testbg2: {
    backgroundColor: 'black',
        textAlign: 'center',
  },
  floatButton: {
    left: '10%',
    bottom: '10%',
    backgroundColor: '#fab1ce'
  },
  snackbar:{
    backgroundColor: 'purple',
    fill: '#FFDDDD'
  },
  test:{
    width:'100%',
    height:'3em',
    backgroundColor: 'pink',
  },
  block: {
    maxWidth: 250,
  },
  toggle: {
    width: '16.6%',
    display: 'inline-block',
    textAlign: 'center',
    backgroundColor:'red',
    zoom: 1
  },
};


// style={STYLES.t2}
// <div style={STYLES.test}>  </div>
    // <span style={STYLES.unit}><ToolbarSeparator  /></span>
//
    // <List subheader='Currently only email is working, the rest will be implemented soon!'>
    //     <ListItem>{headerBar}</ListItem>
    //     {this.props.invitees.map(person => (
    //       <ListItem key={person.key}
    //     primaryText={person.first_name+' '+ person.last_name}
    //     leftAvatar={<Avatar src={person.picture[0].medium}/>} />
    //     ))}

    // </List>


  // componentWillMount() {
  //   this.props.populateIconTable(this.props.invitees);
  // }

  // handleClick(key, channel){
  //   console.log('key: ', key);

  //   // invitees[ke]
  //   this.props.invitees[key].channels[channel] = !this.props.invitees[key].channels[channel]
  //   console.log('invitees after handleclick: ', this.props.invitees[key])
  // }


export default connect(
  // state => ({ invitees: state.data.filter((item)=>state.toinvlist[item.key]===true).map(item => ({...item, channels:{
  //   EM:false, FB:false, TW:false, GO:false, RE: false, IN: false, PI:false}
  //   })) }),
    state => ({invitees: state.data.filter((item)=>state.toinvlist[item.key]===true) }),
        // .key]===true), channels: state.assistvars.channels}),
  { populateIconTable }
)(
  useSheet(Invitepage, STYLES)
);