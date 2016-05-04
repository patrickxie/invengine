import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { channelIconToggle, toggleIconAll } from '../actions/assist_variables';
import InviteItems from '../components/InviteItems';
import List from 'material-ui/lib/lists/list';
import Colors from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import { FB, TW, RE, PI, IN, EM, GO } from '../svg/index.js';
import Popover from 'material-ui/lib/popover/popover';
import { browserHistory } from 'react-router';


export default class InviteTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    // console.log('props in render() is: ', this.props);
    // add payload into props
    const { channels, toggleIconAll, channelIconToggle  } = this.props;
    const suggested = [{'EM':false,'FB':false,'TW':false,'GO':false,'RE':false,'IN':false,'PI':false,'first_name':'Hayden','last_name':'Schoen','picture':[{'large':'https://unsplash.it/600/377?image=47','medium':'http://api.randomuser.me/portraits/med/men/47.jpg'}]},{'EM':false,'FB':false,'TW':false,'GO':false,'RE':false,'IN':false,'PI':false,'first_name':'Brody','last_name':'Bogisich','picture':[{'large':'https://unsplash.it/600/377?image=29','medium':'http://api.randomuser.me/portraits/med/men/29.jpg'}],'avatar':'http://api.randomuser.me/portraits/med/men/29.jpg'},{'EM':false,'FB':false,'TW':false,'GO':false,'RE':false,'IN':false,'PI':false,'first_name':'Kathlyn','last_name':'Blanda','picture':[{'large':'https://unsplash.it/600/377?image=30','medium':'http://api.randomuser.me/portraits/med/women/30.jpg'}]}] //eslint-disable-line
    return(<div >
      <List subheader='Suggested - Currently Disabled, just dummies at the moment'>
        {suggested.map((person, i) => (
          <InviteItems key={i}
                  id={i}
                  itemInfo={suggested[i]}
                  onChannelIconToggle={()=>{}}/>
        ))}
      </List>
    {!!channels.length &&
      <List subheader='Selected'>
        {channels.map((person, i) => (
          <InviteItems key={i}
                  id={i}
                  itemInfo={channels[i]}
                  onChannelIconToggle={channelIconToggle} />
        ))}
      </List>
    }
    <div style={STYLES.buttonGrouper}>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label='SELECT ALL'
          style={STYLES.sendbutton}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
          onRequestClose={this.handleRequestClose}
        >
          <div style={STYLES.popover}>

         <div style={STYLES.All}
         onTouchTap={toggleIconAll.bind(this,'EM')}>
         <EM/></div>
         <div style={STYLES.All}
         onTouchTap={toggleIconAll.bind(this,'FB')}>
         <FB/></div>
         <div style={STYLES.All}
         onTouchTap={()=>toggleIconAll('TW')}>
         <TW/></div>
         <div style={STYLES.All}
         onTouchTap={()=>toggleIconAll('GO')}>
         <GO/></div>
         <div style={STYLES.All}
         onTouchTap={()=>toggleIconAll('RE')}>
         <RE/></div>
         <div style={STYLES.All}
         onTouchTap={()=>toggleIconAll('IN')}>
         <IN/></div>
         <div style={STYLES.All}
         onTouchTap={()=>toggleIconAll('PI')}>
         <PI/></div>

          </div>
        </Popover>
        <RaisedButton
          label='Send Invites'
          style={STYLES.sendbutton}
          onTouchTap={() => browserHistory.push('/sendconfirm')}
        />
    </div>
  </div>);
  }
}

const STYLES = {
  buttonGrouper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFDDDD',
    // color: '#660000'
  },
  sendbutton: {
    textAlign:'center',
    margin: 12,
  },
  popover: {
    padding: 10,
    width: '450px'
  },
  On:{
    fill:Colors.indigo500,
    width: '14.2%',
    display: 'inline-block',
    textAlign: 'center',
    zoom: 1
  },
  All:{
    fill:Colors.indigo500,
    width: '14.2%',
    display: 'inline-block',
    textAlign: 'center',
    zoom: 1
  },
  Off:{
    fill:'grey',
    width: '14.2%',
    display: 'inline-block',
    textAlign: 'center',
    zoom: 1
  },
  container:{
    textAlign: 'justify',
    textJustify: 'distribute-all-lines',
    width: '500px',
    position: 'absolute',
    right: '0px'
  },
};

export default connect(
  state => ({ channels: state.assistvars }),
  { channelIconToggle, toggleIconAll }
)(
  useSheet(InviteTable, STYLES)
);

