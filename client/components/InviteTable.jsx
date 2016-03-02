import React from 'react';
import Kitten from './Kitten';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { channelIconToggle } from '../actions/assist_variables';

import InviteItems from '../components/InviteItems';
import List from 'material-ui/lib/lists/list';

// const Kittens = ({ sheet, kittens, addKitten, deleteKitten }) =>
//   <div className={sheet.classes.kittens}>
//     {!!kittens.length &&
//       <div className={sheet.classes.basket}>
//         {kittens.map(kitten => (
//           <Kitten key={`kitten-${kitten.id}`}
//                   kitten={kitten}
//                   onDeleteKitten={deleteKitten} />
//         ))}
//       </div>
//     }
//   </div>;

const InviteTable = ({ sheet, channels, channelIconToggle }) =>
  <div >
    {!!channels.length &&
      <List>
        {channels.map((person, i) => (
          <InviteItems key={i}
                  id={i}
                  itemInfo={channels[i]}
                  onChannelIconToggle={channelIconToggle} />
        ))}
      </List>
    }
  </div>;

const STYLES = {
  credits: {
    fontSize: 10
  },
};

export default connect(
  state => ({ channels: state.assistvars }),
  { channelIconToggle }
)(
  useSheet(InviteTable, STYLES)
);


// this.props.invitees.map((person, i) => (
//           <ListItem key={i}
//         primaryText={person.first_name+' '+ person.last_name}
//         leftAvatar={<Avatar src={person.picture[0].medium}/>}>
//             {this.props.channels[0].EM? 
//  <div style={STYLES.container} >
//   <div style={STYLES.On}
//   onTouchTap={this.props.channelIconToggle.bind(this,i,'EM', true)}><EM/>{i}</div>
//  </div>
//  :
//   <div style={STYLES.container} >
//   <div style={STYLES.Off}
//   onTouchTap={this.props.channelIconToggle.bind(this,i,'EM', true)}><EM/>{i}</div>
//  </div>
// }

//           </ListItem>
     
