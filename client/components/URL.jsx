import React, { Component } from 'react';
import { connect } from 'react-redux';
import useSheet from 'react-jss';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';
import { inputUrl, inputMail, sendMessage } from '../actions/config_variables';

class URL extends Component {
    constructor(props) {
      super(props);
      const { inputUrl, text, ownerMail, inputMail } = this.props;
    }

    handleUrl (event) {
      this.props.inputUrl(event.target.value)
    }

    handleMessage (event) {
      this.props.sendMessage(event.target.value);
    }

    handleMail (event) {
      this.props.inputMail(event.target.value);
    }

    render() {
      let current_email;
      try {
        current_email = this.props.ownerMail[0].email[0].address;
      } catch (e) {
        current_email = ''
      }
      return (<div>
        <Paper style={STYLES.container}>
          <div style={STYLES.display}>
            <h5 style={STYLES.displayTxt}>
              current url to invite people to:
            </h5>
          </div>
          <TextField
            floatingLabelText='Enter the url you wish to share'
            hintText='example: http://myspace.com'
            underlineStyle={STYLES.underlineStyle}
            style={STYLES.button}
            onChange={this.handleUrl.bind(this)}
          />
          <br/>
        </Paper>
        <div style={STYLES.container}>
          <div style={STYLES.divider}/>
        </div>
        <Paper style={STYLES.container}>
          <div style={STYLES.display}>
              <h5 style={STYLES.displayTxt}>
              please input your email below:
              </h5>
          </div>
          <TextField
            floatingLabelText='Enter your email here'
            hintText='example: john.doe@gmail.com'
            underlineStyle={STYLES.underlineStyle}
            value={current_email}
            style={STYLES.button}
            onChange={this.handleMail.bind(this)}
          />
          <br/>
        </Paper>
        <div style={STYLES.container}>
          <div style={STYLES.divider}/>
        </div>
        <Paper style={STYLES.container}>
          <h5 style={STYLES.displayTxt}>
              Add a custom message below:
          </h5>
          <TextField
            multiLine
            value={this.props.text}
            underlineShow={false}
            rows={5}
            style={STYLES.txtField}
            onChange={this.handleMessage.bind(this)}
            />
      </Paper>
      </div>)
    }
}

const STYLES = {
  button:{
    marginRight: 45,
    display: 'inline-block',
    marginBottom: 20
  },
  submitbutton: {
    marginBottom: 12
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  container: {
    textAlign: 'center',
    margin: 'auto',
    width: '90%',
    position: 'relative',
  },
  underlineStyle: {
    width: 300,
  },
  display:{
    textAlign: 'center',
  },
  displayTxt:{
    paddingTop: '10'
  },
  txt: {
    backgroundColor: Colors.grey50,
    // border: '1px solid #c3c3c3',
    borderRadius: 4,
    color: 'blue'
  },
  txtField: {
    border: '1px solid #c3c3c3',
    marginBottom: 25
  }
};

export default connect(
  state => ({ text: state.configvars.message,
    ownerMail: state.configvars.details }),
  { inputUrl, inputMail, sendMessage }
)(
  useSheet(URL, STYLES)
);

