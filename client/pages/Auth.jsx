import React from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import ImportContacts from '../components/ImportContacts';
import ImportSingle from '../components/ImportSingleContacts';
import { addSingleContact, addMultipleContacts, consent } from '../actions/imported'

import ActionAndroid from 'material-ui/lib/svg-icons/action/android';

const Authpage = ({ addSingleContact, addMultipleContacts, consent }) => (
<Paper style={STYLES.canvas}>
   <Toolbar styles={STYLES.toolbar}>
    <ToolbarGroup firstChild={true} float='left'>
      <h4 style={STYLES.stepText}>Step 1: Add or Import your contacts</h4>
    </ToolbarGroup>
   </Toolbar>
   <div>
     <h1>hoohoho</h1>
     <RaisedButton
      label='Email Contacts'
      linkButton={true}
      href='https://github.com/callemall/material-ui'
      style={STYLES.button}
      labelColor={Colors.indigoA200}
      icon={<FontIcon className='muidocs-icon-custom-github'/>}
     />
     <ImportSingle dispatchMethod={addSingleContact} onConsent={consent} labelName={'Add New'} />
     <ImportContacts labelName={'Import from Gmail'}/>

   </div>
<Divider />
   <Toolbar styles={STYLES.toolbar}>
    <ToolbarGroup firstChild={true} float='left'>
      <h4 style={STYLES.stepText}>Step 2: Import your picture albums</h4>
    </ToolbarGroup>
   </Toolbar>
   <div>
     <p>You may use the generate pictures if you do not have an album in one of the currently listed services below</p>
     <RaisedButton
      label='flickr'
      linkButton={true}
      href='https://flickr.com'
      style={STYLES.button}
      labelColor={Colors.indigoA200}
      icon={<FontIcon className='muidocs-icon-custom-github'/>}
     /><span>   </span>
     <RaisedButton
      label='Generate Pictures'
      linkButton={true}
      href='https://flickr.com'
      style={STYLES.button}
      labelColor={Colors.indigoA200}
      icon={<FontIcon className='muidocs-icon-custom-github'/>}
     />
   </div>
<Divider />
    <FlatButton
      label='Next'
      labelPosition='before'
      primary={true}
      icon={<ActionAndroid />}
      onTouchTap={()=>browserHistory.push('/home')}
    />

</Paper>
);

const STYLES = {
    stepText : {
        color: 'grey',
        // textAlign: 'center',
        textIndent: '15'
    },
    toolbar: {
        // width: '50%',
    },
    canvas: {
        margin: 'auto',
        width: '80%',
        border: 'solid 1px #e0e0e0',
        position: 'relative',
        top:10
    },
    button: {
        // fill: Colors.deepOrange400
        borderRadius:5,
        margin: 'auto'
        // border: 'solid 1px #e0e0e0',
    }
};

// export default Authpage;
export default connect(
  state => ({ url: state.configvars.url }),
  { addSingleContact, addMultipleContacts, consent }
)(Authpage );
