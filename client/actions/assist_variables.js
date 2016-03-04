// export function inputUrl(url){
//     return dispatch => dispatch(
//         { type: 'input_url',
//           url
//          });
// }

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

export function populateIconTable(table) {
  return dispatch=> dispatch(
    {
      type:'populate_Icon_Table',
      table
    });
}
