import React, { Component } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import { Apple, AddressBook, iCloud, DropBox, Flickr, Gmail, Outlook, Linkedin, Windows, Yahoo } from '../svg/index.js';

class ImportContacts extends Component {
  constructor(props) {
    super(props);

    const { dispatchMethod } = this.props;
        // var address_book;
// Asynchronously include the widget library.
// TODO: replace with your widget script
    (function(u) {
      var d=document,s='script',a=d.createElement(s),m=d.getElementsByTagName(s)[0];
      a.async=1;a.src=u;m.parentNode.insertBefore(a,m);
    })('//api.cloudsponge.com/widget/c49906adec2fb3b50967415690a4082f639911af.js');
// extra widget options go here:

    window.csPageOptions = {
      // floatbox:{ outsideClickCloses:true },
      // skipSourceMenu:true, 
      // sources: ['gmail', 'yahoo', 'windowslive', 'linkedin', 'icloud', 'outlook', 'addressbook'],
      beforeDisplayContacts (contacts, source, owner) {
        // address_book = contacts;
        console.log('gogoogo')
        dispatchMethod(contacts, owner, source);
        console.log('done')
        return false; // the widget will now close..
      }
    };

    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const { labelName } = this.props;
    const actions = [
      <FlatButton
        label='Cancel'
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label='Done'
        primary={true}
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
          modal={true}
          open={this.state.open}
          contentStyle={STYLES.dialog}
          autoScrollBodyContent
        >
<List style={STYLES.list}>
  <ListItem>
    <RaisedButton
      label="Import from Google Contacts"
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100} 
      onTouchTap={()=>cloudsponge.launch('gmail')}
      >
    <span style={STYLES.svgWrap}><Gmail width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label="Import from Yahoo Contacts"
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100} 
      onTouchTap={()=>cloudsponge.launch('yahoo')}
      >
    <span style={STYLES.svgWrap}><Yahoo width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label="Import from Windows Contacts"
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100} 
      onTouchTap={()=>cloudsponge.launch('windowslive')}
      >
    <span style={STYLES.svgWrap}><Windows width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label="Import from Address Book"
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100} 
      onTouchTap={()=>cloudsponge.launch('addressbook')}
      >
    <span style={STYLES.svgWrap}><AddressBook width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label="Import from iCloud Contacts"
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100} 
      onTouchTap={()=>cloudsponge.launch('icloud')}
      >
    <span style={STYLES.svgWrap}><Apple width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label="Import from Outlook Contacts"
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100} 
      onTouchTap={()=>cloudsponge.launch('Outlook')}
      >
    <span style={STYLES.svgWrap}><Outlook width={25} height={25}/></span>
    </RaisedButton>
  </ListItem>
  <ListItem>
    <RaisedButton
      label="Import from Linkedin"
      labelColor={'#536DFE'}
      style={STYLES.button}
      backgroundColor={Colors.grey100} 
      onTouchTap={()=>cloudsponge.launch('linkedin')}
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
  // svg: {
  //   height: '100%',
  //   width: '100%',
  //   // fontSize: 15,
  //   fill: '#536DFE'
  // }, 
  // box: {
  //   height: 25, 
  //   width: 25,
  //   fill: 'red',
  //   fontSize:10
  // },
  label: {
    fill: '#536DFE'
  },
  // txt: {
  //   color: '#536DFE',
  //   textDecoration: 'underline'
  // },
  dialog:{
    // width: '80%',
    // maxWidth: 'none',
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

// <script>
//   (function(u){
//     var d=document,s='script',a=d.createElement(s),m=d.getElementsByTagName(s)[0];
//     a.async=1;a.src=u;m.parentNode.insertBefore(a,m);
//   })('//api.cloudsponge.com/widget/c49906adec2fb3b50967415690a4082f639911af.js');
//   window.csPageOptions = { textarea_id: 'contact_list' };
// </script>




  // window.csPageOptions = {
  //   textarea_id:'contact_list',
  //   mobile_render:true,
  //   inlineOauth:'mobile',
  //   selectAccount:true,
  //   sources: ['gmail','yahoo','windowslive','linkedin','icloud','aol','addressbook','outlook']
  // };

  // (function(u){
  //   var d=document,s='script',a=d.createElement(s),m=d.getElementsByTagName(s)[0];
  //   a.async=1;a.src=u;m.parentNode.insertBefore(a,m);
  // })('//api.cloudsponge.com/widget/CLOUDSPONGE_DEMO_DOMAIN_KEY.js');
