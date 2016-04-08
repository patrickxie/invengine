import React, { Component } from 'react';
import { connect } from 'react-redux';
import useSheet from 'react-jss';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import { inputUrl, inputMail, sendMessage, validateEmail }
from '../actions/config_variables';

class URL extends Component {
    constructor(props) {
      super(props);
      const { inputUrl, url, text, ownerMail, inputMail } = this.props;
      this.state = {
        errTxt: 'This field is required',
        value: null,
        displayEmail: false
        // display: null
      };
    }

    handleChangeText (event) {
      if (event.target.value.length>0) {
        this.setState({
            ...this.state,
          errTxt:null, value:event.target.value
        });
      }
      else {
        this.setState({
            ...this.state,
          errTxt: 'This field is required',
          value: null
        });
      };
    }

    handleClick () {
        // this.setState({
        //     ...this.state, display:this.state.value
        // })
      this.props.inputUrl(this.state.value);
    }

    handleMessage (event) {
      this.props.sendMessage(event.target.value);
    }

    handleMail (event) {
      this.props.inputMail(event.target.value);
      this.state.displayEmail = true
    }

    render() {
      var email;
      console.log('state display email is : ', this.state.displayEmail)
      try {
        email = !this.props.ownerMail[0].email[0].address
        console.log('email here is: ', email)
      }
      catch (e) {
        email = true
        console.log('catch exception: ', email)
      }

      return (<div>
        <Paper style={STYLES.container}>
          <div style={STYLES.display}>
              <h5 style={STYLES.displayTxt}>
              current url to invite people to:
              <span style={STYLES.txt}> {this.props.url}</span> </h5>
          </div>
          <TextField
            floatingLabelText='Enter share destination URL'
            hintText='example: http://myspace.com'
            underlineStyle={STYLES.underlineStyle}
            style={STYLES.button}
            onChange={this.handleChangeText.bind(this)}
            onEnterKeyDown={this.handleClick.bind(this)}
            errorText={this.state.errTxt}
          />
          <br/>
          <FlatButton onClick={this.handleClick.bind(this)}
          label='Submit' style={STYLES.submitbutton} />
        </Paper>
        <div style={STYLES.container}>
          <div style={STYLES.divider}/>
        </div>
      { this.state.displayEmail || email  ? <Paper style={STYLES.container}>
          <div style={STYLES.display}>
              <h5 style={STYLES.displayTxt}>
              please input your email below:
              <span style={STYLES.txt}> {this.props.url}</span> </h5>
          </div>
          <TextField
            floatingLabelText='Enter your email here'
            hintText='example: john.doe@gmail.com'
            underlineStyle={STYLES.underlineStyle}
            style={STYLES.button}
            onChange={this.handleMail.bind(this)}
          />
          <br/>
          <FlatButton onClick={this.handleClick.bind(this)}
          label='Submit' style={STYLES.submitbutton} />
        </Paper> : null }
      { this.state.displayEmail || email ? <div style={STYLES.container}>
          <div style={STYLES.divider}/>
        </div> : null }
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
    display: 'inline-block'
  },
  submitbutton: {
    // position: 'absolute',
    // top: '50%',
    // transform: 'translateY(-50%)',
    // marginLeft:10
    marginBottom: 12

  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  container: {
    textAlign: 'center',
    // height: '13rem',
    margin: 'auto',
    width: '90%',
    position: 'relative',
    // top:20,
    // display:'span'
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
  state => ({ url: state.configvars.url,
    text: state.configvars.message,
    ownerMail: state.configvars.details }),
  { inputUrl, inputMail, sendMessage }
)(
  useSheet(URL, STYLES)
);

