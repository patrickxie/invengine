
import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { inputUrl } from '../actions/assist_variables';

import { browserHistory } from 'react-router';

import URL from '../components/URL';



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

    return <div><URL/><h1 onDoubleClick={this.handleClick}>
      'hello'</h1> <Divider/>
    <List subheader="Recent chats">
        {invitees.map(person => (
          <ListItem key={person.key}
        primaryText={person.first_name+' '+ person.last_name}
        leftAvatar={<Avatar src={person.picture[0].medium}/>} />
        ))}

    </List>
  </div>;
  }
}




const STYLES = {
  iconButton:{
    fill: '#fab1ce'
  },
  popover: {
    padding: 20,
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
    width:300,
    height:300,
    backgroundColor: 'pink',
  }
};

export default connect(
  state => ({ invitees: state.data.filter((item)=>state.toinvlist[item.key]===true) }),
  // { requestAPIData, changeSort }
)(
  useSheet(Invitepage, STYLES)
);