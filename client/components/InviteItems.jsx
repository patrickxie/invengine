import React from 'react';
import useSheet from 'react-jss';
import Colors from 'material-ui/lib/styles/colors';
import { FB, TW, RE, PI, IN, EM, GO } from '../svg/index.js';

import Avatar from 'material-ui/lib/avatar';
import ListItem from 'material-ui/lib/lists/list-item';


const InviteItem = ({ sheet, id, itemInfo, onChannelIconToggle }) =>(
  <ListItem key={id}
    primaryText={itemInfo.first_name+' '+ itemInfo.last_name}
    leftAvatar={<Avatar src={itemInfo.picture[0].medium}/>} >
       <div style={STYLES.container} >
         <div style={itemInfo.EM?STYLES.On:STYLES.Off}
         onTouchTap={onChannelIconToggle.bind(this, id,'EM')}>
         <EM/></div>
         <div style={itemInfo.FB?STYLES.On:STYLES.Off}
         onTouchTap={onChannelIconToggle.bind(this, id,'FB')}>
         <FB/></div>
         <div style={itemInfo.TW?STYLES.On:STYLES.Off}
         onTouchTap={onChannelIconToggle.bind(this, id,'TW')}>
         <TW/></div>
         <div style={itemInfo.GO?STYLES.On:STYLES.Off}
         onTouchTap={onChannelIconToggle.bind(this, id,'GO')}>
         <GO/></div>
         <div style={itemInfo.RE?STYLES.On:STYLES.Off}
         onTouchTap={onChannelIconToggle.bind(this, id,'RE')}>
         <RE/></div>
         <div style={itemInfo.IN?STYLES.On:STYLES.Off}
         onTouchTap={onChannelIconToggle.bind(this, id,'IN')}>
         <IN/></div>
         <div style={itemInfo.PI?STYLES.On:STYLES.Off}
         onTouchTap={onChannelIconToggle.bind(this, id,'PI')}>
         <PI/></div>
       </div>
  </ListItem>

);



const STYLES = {
  On:{
    fill:Colors.indigo500,
    width: '14.2%',
    display: 'inline-block',
    textAlign: 'center',
    zoom: 1
  },
  Off:{
    fill:'grey',
    width: '14.2%',
    display: 'inline-block',
    textAlign: 'center',
    zoom: 1
  },
  container:{
    textAlign: 'justify',
    textJustify: 'distribute-all-lines',
    width: '70%',
    position: 'absolute',
    right: '0px'
  },
};

export default useSheet(InviteItem, STYLES);
