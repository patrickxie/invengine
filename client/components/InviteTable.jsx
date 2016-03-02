import React from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { channelIconToggle } from '../actions/assist_variables';

import InviteItems from '../components/InviteItems';
import List from 'material-ui/lib/lists/list';

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

