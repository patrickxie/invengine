import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

class ImportContacts extends Component {
  constructor(props) {
    super(props);
    // const { dispatchMethod } = this.props;
    this.state = {
      open: false,
      submittable: true,
      contact: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: ''
      }
    };
  }

  handleOpen = () => {
    this.setState({ ...this.state, open: true });
  };

  handleClose = () => {
    this.setState({ ...this.state, open: false });
    this.props.dispatchMethod(this.state.contact);
  };

  handleChange(e, key) {
    this.setState({
      ...this.state,
      contact:{
        ...this.state.contact,
        [key]: e.target.value
      },
    })
  }

  render() {
    const { labelName } = this.props;
    const { email, first_name, last_name } = this.state.contact;
    const submit = !!email && !!first_name && !!last_name;
    const actions = [
      <FlatButton
        label='Cancel'
        secondary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label='Submit'
        primary
        disabled={!submit}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];

    return (
      <div>
        <RaisedButton label={labelName} onTouchTap={this.handleOpen} />
        <Dialog
          title='Input Contact Info:'
          actions={actions}
          modal
          open={this.state.open}
        >
          <TextField
            hintText='*First Name'
            onChange={this.handleChange.bind(this, event, 'first_name')}
            /><span>    </span>
          <TextField
            hintText='*Last Name'
            onChange={this.handleChange.bind(this, event, 'last_name')}
          /><br/>
          <TextField
            hintText='*Email'
            onChange={this.handleChange.bind(this, event, 'email')}
            /><span>    </span>
          <TextField
            hintText='Phone'
            onChange={this.handleChange.bind(this, event, 'phone')}
            /><br/>
          <TextField
            hintText='Address'
            onChange={this.handleChange.bind(this, event, 'address')}
            />
          <p> * are required </p>
        </Dialog>

      </div>
    );
  }
}


export default ImportContacts;
