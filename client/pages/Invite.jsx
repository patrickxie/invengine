
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

    const headerBar = (<div>
    <span style={STYLES.unit}><EM/></span>
    <span style={STYLES.unit}><ToolbarSeparator  /></span>
    <span style={STYLES.unit}><FB/></span>
    <span style={STYLES.unit}><ToolbarSeparator  /></span>
    <span style={STYLES.unit}><TW/></span>
    <span style={STYLES.unit}><ToolbarSeparator  /></span>
    <span style={STYLES.unit}><GO/></span>
    <span style={STYLES.unit}><ToolbarSeparator  /></span>
    <span style={STYLES.unit}><RE/></span>
    <span style={STYLES.unit}><ToolbarSeparator  /></span>
    <span style={STYLES.unit}><IN/></span>
    <span style={STYLES.unit}><ToolbarSeparator  /></span>
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
  </div>;
  }
}
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
    width:'8.3%',
    // height:'80px',
    display:'inline-block',
    // backgroundColor: 'silver'
    // webkitAlignContent: 'center',
    // alignContent: 'center'

  },
  icons:{
    fill:'blue',
    // display:'flex',
    justifyContent: 'space-around',
    // width: '70%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // justifyContent: 'space-between',
    // alignContent: 'stretch',
    // flexBasis: '20%',
    backgroundColor:'cyan',
    width: '100%'
  },
  t2:{
    backgroundColor: 'magenta',
    // display:'flex',
    // justifyContent: 'space-between',
    // width: '60%',
  },
  parent:{
    display: 'flex'
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