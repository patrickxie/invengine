import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import { FB, TW, RE, PI, IN, EM, GO } from '../svg/index.js';

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
    // console.log('dispatch is : ', dispatchMethod);
    console.log('dispatch is : ', this.props.dispatchMethod);

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
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
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
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        <IconButton tooltip="Font Icon"  onTouchTap={()=>cloudsponge.launch('gmail')}>
          <EM />
        </IconButton> 
        <IconButton tooltip="Font Icon" onTouchTap={()=>cloudsponge.launch('yahoo')}>
          <FB />
        </IconButton>
        </Dialog>
      </div>
    );
  }
}


export default ImportContacts;

// <script>
//   (function(u){
//     var d=document,s='script',a=d.createElement(s),m=d.getElementsByTagName(s)[0];
//     a.async=1;a.src=u;m.parentNode.insertBefore(a,m);
//   })('//api.cloudsponge.com/widget/c49906adec2fb3b50967415690a4082f639911af.js');
//   window.csPageOptions = { textarea_id: "contact_list" };
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
