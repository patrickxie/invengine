export function channelIconToggle(key, channel) {
  return dispatch => dispatch(
    {
      type:'channel_icon_toggle',
      key, channel
    });
}

export function toggleIconAll(channel) {
  return dispatch => dispatch(
    {
      type:'toggle_icon_all',
      channel
    });
}

export function populateIconTable() {
  return (dispatch, getState)=>{
    let invitees = getState().data.filter((item)=>getState().toinvlist[item.key]===true);
    dispatch(
      {
        type:'populate_Icon_Table_with_existing',
        table: invitees
      });
  }
}
