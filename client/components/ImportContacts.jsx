import React, { Component } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import { Apple, AddressBook, Gmail, Outlook, Linkedin, Windows, Yahoo } from '../svg/index.js';

class ImportContacts extends Component {
  constructor(props) {
    super(props);
    const { dispatchMethod } = this.props;
    (function(u) {
      var d=document,s='script',a=d.createElement(s),m=d.getElementsByTagName(s)[0];
      a.async=1;a.src=u;m.parentNode.insertBefore(a,m);
    })('//api.cloudsponge.com/widget/c49906adec2fb3b50967415690a4082f639911af.js');

    window.csPageOptions = {
      beforeDisplayContacts (contacts, source, owner) {
        dispatchMethod(contacts, owner, source);
        return false;
      }
    };

    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { labelName } = this.props;
    const actions = [
      <FlatButton
        label='Cancel'
        secondary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label='Done'
        primary
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label={labelName}
            onTouchTap={this.handleOpen.bind(this)}
            labelColor={Colors.indigoA200} />
        <Dialog
          actions={actions}
          modal
          open={this.state.open}
          contentStyle={STYLES.dialog}
          autoScrollBodyContent
        >
<List style={STYLES.list}>
  <ListItem>
    <RaisedButton
      label='Import from Google Contacts'
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100}
      onTouchTap={()=>cloudsponge.launch('gmail')}//eslint-disable-line
      >
    <span style={STYLES.svgWrap}><Gmail width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label='Import from Yahoo Contacts'
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100}
      onTouchTap={()=>cloudsponge.launch('yahoo')}//eslint-disable-line
      >
    <span style={STYLES.svgWrap}><Yahoo width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label='Import from Windows Contacts'
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100}
      onTouchTap={()=>cloudsponge.launch('windowslive')}//eslint-disable-line
      >
    <span style={STYLES.svgWrap}><Windows width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label='Import from Address Book'
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100}
      onTouchTap={()=>cloudsponge.launch('addressbook')}//eslint-disable-line
      >
    <span style={STYLES.svgWrap}><AddressBook width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label='Import from iCloud Contacts'
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100}
      onTouchTap={()=>cloudsponge.launch('icloud')}//eslint-disable-line
      >
    <span style={STYLES.svgWrap}><Apple width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label='Import from Outlook Contacts'
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100}
      onTouchTap={()=>cloudsponge.launch('Outlook')}//eslint-disable-line
      >
    <span style={STYLES.svgWrap}><Outlook width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label='Import from Linkedin'
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100}
      onTouchTap={()=>cloudsponge.launch('linkedin')}//eslint-disable-line
      >
    <span style={STYLES.svgWrap}><Linkedin width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>




</List>

        </Dialog>
      </div>
    );
  }
}

const STYLES = {
  label: {
    fill: '#536DFE'
  },
  dialog:{

  },
  button: {
    // margin: 12,
    color: '#536DFE',
    height: '2.5rem',
    width: '100%'
  },
  svgWrap: {
    position: 'relative',
    // bottom:2,
    left: 9,
    top: 7,
    fill: '#536DFE'
  },
  list: {
    textAlign: 'center'
  }
};

export default ImportContacts;
