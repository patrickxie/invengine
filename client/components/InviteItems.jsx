import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import KittenIcon from '../svg/kitten.svg';

import FacebookBoxIcon from '../svg/facebook-box.svg';
import FacebookMessengerIcon from '../svg/facebook-messenger.svg';
import TW from '../svg/twitter.svg';
import SC from '../svg/snapchat.svg';
import FB from '../svg/facebook.svg';
import RE from '../svg/reddit.svg';
import PI from '../svg/pinterest.svg';
import IN from '../svg/instagram.svg';
import EM from '../svg/email.svg';
import GO from '../svg/google-plus.svg';

import Avatar from 'material-ui/lib/avatar';

import ListItem from 'material-ui/lib/lists/list-item';

// const Kitten = ({ sheet, onDeleteKitten, kitten }) => (
//   <div className={sheet.classes.kitten}>
//     <div className={sheet.classes.info}>
//       <div style={{ color: COLORS[kitten.id % 8] }}><KittenIcon /></div>
//       <div>Kitten #{kitten.id}</div>
//     </div>
//     <a className={sheet.classes.button}
//        onClick={onDeleteKitten.bind(this, kitten.id)}>
//       Remove kitten
//     </a>
//   </div>
// );



const InviteItem = ({ sheet, id, itemInfo, onChannelIconToggle }) =>{ 
    // console.log('itemInfo is: ', JSON.stringify(itemInfo));
    console.log('id is: ', id);
    console.log('callback is: ', onChannelIconToggle);
    // console.log('itemInfo picture is ', itemInfo.picture[0].medium);

return(
  <ListItem key={id}
        primaryText={itemInfo.first_name+' '+ itemInfo.last_name}
  leftAvatar={<Avatar src={itemInfo.picture[0].medium}/>}   >
            {itemInfo.EM? 
 <div style={STYLES.container} >
  <div style={STYLES.On}
  onTouchTap={onChannelIconToggle.bind(this, id,'EM', true)}><EM/></div>
 </div>
 :
  <div style={STYLES.container} >
  <div style={STYLES.Off}
  onTouchTap={onChannelIconToggle.bind(this, id,'EM', true)}><EM/></div>
 </div>
}

  </ListItem>

);
}


const STYLES = {
  On:{
    fill:'#000080',
    width: '14.2%',
    display: 'inline-block',
    textAlign: 'center',
    // backgroundColor:'red',
    zoom: 1

  },
  Off:{
    fill:'grey',
    width: '14.2%',
    display: 'inline-block',
    textAlign: 'center',
    zoom: 1
  },
  icons:{
    fill:'blue',
  },
  container:{
    // fill:'#000080',
    textAlign: 'justify',
    // MsTextJustify: 'distribute-all-lines',
    textJustify: 'distribute-all-lines',
    width: '70%',
    position: 'absolute',
    right: '0px'
  },
};

export default useSheet(InviteItem, STYLES);


// Kitten.propTypes = {
//   kitten: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     created: PropTypes.string.isRequired
//   }).isRequired
// };
