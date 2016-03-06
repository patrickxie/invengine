import React, { Component } from 'react';
import { connect } from 'react-redux';
import useSheet from 'react-jss';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import { inputUrl } from '../actions/config_variables';

class URL extends Component {
    constructor(props) {
      super(props);
      const { inputUrl, url } = this.props;
      this.state = {
        errTxt: 'This field is required',
        value: null,
        // display: null
      };
    }

    handleChangeText (event) {
      if (event.target.value.length>0) {
        this.setState({
            // ...this.state,
          errTxt:null, value:event.target.value
        });
      }
      else {
        this.setState({
            // ...this.state,
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

    render() {
      return (<Paper style={STYLES.container}>
        <div style={STYLES.display}>
            <h5 style={STYLES.displayTxt}>
            CURRENT URL TO INVITE PEOPLE TO:
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
        <FlatButton onClick={this.handleClick.bind(this)}
        label='Submit' style={STYLES.submitbutton} />
      </Paper>)
    }
}

const STYLES = {
  button:{
    marginRight: 22,
    display: 'inline-block'
  },
  submitbutton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft:30

  },
  container: {
    // textAlign: 'center',
    height: '13rem',
    margin: 'auto',
    width: '100%',
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
    padding: '10'
  },
  txt: {
    backgroundColor: Colors.grey50,
    // border: '1px solid #c3c3c3',
    borderRadius: 4,
    color: 'blue'
  }
};

export default connect(
  state => ({ url: state.configvars.url }),
  { inputUrl }
)(
  useSheet(URL, STYLES)
);

