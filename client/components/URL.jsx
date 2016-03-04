import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';

class URL extends Component {
    constructor(props) {
      super(props);
      this.state = {
          errTxt: 'This field is required',
          value: null,
          display: null
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

    handleClick (){
        this.setState({
            ...this.state, display:this.state.value
        })
    }

    render() {
      return <Paper style={STYLES.container}>
        <div style={STYLES.display}>
            <h5 style={STYLES.displayTxt}>
            CURRENT URL TO INVITE PEOPLE TO: {this.state.display} </h5>
        </div>
        <TextField
          floatingLabelText="Enter share destination URL"
          hintText="example: http://myspace.com"
          underlineStyle={STYLES.underlineStyle}
          style={STYLES.button}
          onChange={this.handleChangeText.bind(this)}
          onEnterKeyDown={this.handleClick.bind(this)}
          errorText={this.state.errTxt}
        />
        <FlatButton onClick={this.handleClick.bind(this)} label="Submit" style={STYLES.submitbutton} />
      </Paper>
    }
}
//submit button, onEnterkepressdon={dispatch}
//error text is prompted if clicked submit without a URL entered

 
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
    }
};

// export default connect(
//   state => ({ kittens: state.kittens }),
//   { addKitten, deleteKitten }
// )(
//   useSheet(Kittens, STYLES)
// );

export default URL