import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { channelIconToggle } from '../actions/assist_variables';
import InviteItems from '../components/InviteItems';
import List from 'material-ui/lib/lists/list';

import RaisedButton from 'material-ui/lib/raised-button';
import { FB, TW, RE, PI, IN, EM, GO } from '../svg/index.js';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';

export default class InviteTable extends Component {
  constructor(props) {
    super(props);
    console.log('props in constructor is: ', this.props);
    this.state = {
      open: false,
    };
  }

   handleTouchTap = (event) => {
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
    console.log('props in render() is: ', this.props);
    const { sheet, channels, channelIconToggle } = this.props;

    return(<div >
    {!!channels.length &&
      <List>
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
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'middle', vertical: 'bottom'}}
          onRequestClose={this.handleRequestClose}
        >
          <div style={STYLES.popover}>
            <RaisedButton primary={true} label="Here is a button"/>
          </div>
        </Popover>
        <RaisedButton
          label='Send Invites'
          style={STYLES.sendbutton}
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
    padding: 20,
  },
};

export default connect(
  state => ({ channels: state.assistvars }),
  { channelIconToggle }
)(
  useSheet(InviteTable, STYLES)
);

