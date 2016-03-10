import React from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';

import { browserHistory } from 'react-router';
import Snackbar from 'material-ui/lib/snackbar';
import ImportContacts from '../components/ImportContacts';
import ImportSingle from '../components/ImportSingleContact';
import { addSingleContact, addMultipleContacts, consent,
  generateContact } from '../actions/imported';

import { generatePic } from '../actions/pictures';

import FloatingActionButton from 'material-ui/lib/floating-action-button';

import ArrowForward from 'material-ui/lib/svg-icons/navigation/arrow-forward';
import Forward from 'material-ui/lib/svg-icons/content/forward';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const Authpage = ({ addSingleContact, addMultipleContacts, consent,
  generateContact, newFriend, generatePic, pics }) => (
<Paper style={STYLES.canvas}>
   <Toolbar styles={STYLES.toolbar}>
    <ToolbarGroup firstChild float='left'>
      <h4 style={STYLES.stepText}>Step 1: Add or Import your contacts</h4>
    </ToolbarGroup>
   </Toolbar>
   <div>
     <h5>{`Please add contacts from one of the following sources,
      I understand that handing over your contact book to a random
      internet webapp might not be cool, especially for a new app
      in beta, so I have made an option for you to add randomly generated friends`}</h5>
     <div style={STYLES.buttonholder}>
       <span style={STYLES.buttongroup}><RaisedButton
        label='Generate Contacts'
        onTouchTap={generateContact}
        labelColor={Colors.indigoA200}
       /></span>
      <span style={STYLES.buttongroup}><ImportSingle
        dispatchMethod={addSingleContact} labelName={'Add New'}
        onConsent={consent}
        style={STYLES.gg}/></span>
       <span style={STYLES.buttongroup}><ImportContacts labelName={'Import from Gmail'}
         style={STYLES.gg}/></span>
     </div>
   </div>
<Divider />
   <Toolbar styles={STYLES.toolbar}>
    <ToolbarGroup firstChild float='left'>
      <h5 style={STYLES.stepText}>Step 2: Import your picture albums</h5>
    </ToolbarGroup>
   </Toolbar>
   <div>
     <p>You may use the generate pictures if you do not have an album in one of the currently listed services below, currently everything but generated pictures are disabled but I have plans to add them soon!</p>
     <RaisedButton
      label='flickr'
      linkButton={true}
      href='https://flickr.com'
      style={STYLES.button}
      disabled
      labelColor={Colors.indigoA200}
      icon={<FontIcon className='muidocs-icon-custom-github'/>}
     /><span>   </span>
     <RaisedButton
      label='Generate Pictures'
      style={STYLES.button}
      labelColor={Colors.indigoA200}
      onTouchTap={generatePic}
     />
   </div>
<Divider style={STYLES.divider} />   
{!!pics.length &&
  <List subheader='Loaded Pictures'>
    <ListItem>
      {pics.map((pic, i) => (
        <Paper style={{ ...STYLES.circlePics,
          backgroundImage:`url(${pic})` }}
          zDepth={2} circle key={i}/>
      ))}
    </ListItem>
  </List>
}
    <FlatButton
      label='Next'
      labelPosition='before'
      secondary
      icon={<Forward />}
      onTouchTap={()=>browserHistory.push('/home')}
    />
  <Snackbar
    open={!!newFriend}
    message={!!newFriend? `New Friend ${newFriend.first_name} Added.`: 'hello'}
    autoHideDuration={4000}
    onRequestClose={()=>{}}
    bodyStyle={STYLES.snackbar}
  />
   <FloatingActionButton mini secondary style={STYLES.inviteButton}
    onTouchTap={() => browserHistory.push('/home')}><ArrowForward /></FloatingActionButton>
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
    backgroundColor: Colors.grey500
  },
  divider: {
    marginTop:5,
    opacity: 0
  },
  canvas: {
    margin: 'auto',
    width: '80%',
    border: 'solid 1px #e0e0e0',
    position: 'relative',
    top:10,
    textAlign:'center'
  },
  button: {
    // fill: Colors.deepOrange400
    borderRadius:5,
    margin: 'auto'
    // border: 'solid 1px #e0e0e0',
  },
  buttongroup:{
    display:'inline-block',
    // backgroundColor: 'blue',
    margin: 5
  },
  buttonholder:{
    // display:'inline-block',
    width:'100%',
    // height:'5rem',
    // backgroundColor: 'pink'
  },
  snackbar: {
    backgroundColor: Colors.grey300,
    // color: Colors.red500,
    // fill: Colors.red500
  },
  snackbartext: {
    // color: Colors.red500,
    // fill: Colors.red500
  },
  inviteButton: {
    right: '7%',
    bottom: '7%',
    // backgroundColor: '#fab1ce',
    fill: 'white',
    position: 'fixed',
    cursor: 'pointer'
  },
  circlePics: {
    height: 150,
    width: 150,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundSize: 'cover',
    // backgroundImage: `url(${suzy})`
  }
};

// export default Authpage;
export default connect(
  state => ({ newFriend: state.imported[state.imported.length-1], pics:state.pictures }),
  { addSingleContact, addMultipleContacts, consent, generateContact, generatePic }
)(Authpage );
