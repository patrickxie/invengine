import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';

class ImportContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
    // this.props.onConsent('user_consent');
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
          Only actions can close this dialog.
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
