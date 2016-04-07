import { get, post, del } from '../utils/api'; //eslint-disable-line
import { actions as notifActions } from 're-notif';
const { notifSend, notifClear } = notifActions;

export function invitesSent(){
  return dispatch => dispatch(
    notifSend({message: 'invites have been sent',
    dismissAfter: 2000 })
  )
}



export function inputUrl(url) {
  return dispatch => dispatch(
    { type: 'input_url',
      url
    });
}

export function sendMessage(message) {
  return dispatch => dispatch(
    { type: 'input_custom_invite_message',
      message }
    )
}


export function sendInvites() {
  const thunk = async (dispatch, getState) => {
  // return async (dispatch, getState) => {
    console.log('state.data is: ', JSON.stringify(getState().data))
    let { assistvars, configvars } = getState();
    let data = { id: configvars.invengine_id, token: configvars.token,
        url:configvars.url, owner_info: configvars.details,
       invites: assistvars, custom_message: configvars.message };
       //data value checker, if doesn't work then dispatch a err message
       // this same err message will display success upon success
    if ( data.id&&data.token ) {
      // console.log('id & token', data.id&&data.token)
      // console.log(JSON.stringify(data))
      dispatch(dispatchSendInvites(data))
    }
    else {
      dispatch({
        type:'obtaining_id&token_from_server' });
      try {
        const result = await get(`http://localhost:5000/api/users`);
        // const result = await get(`/api/users/${data.id}`);//uncomment this for local web
        // console.log('aResult: ', result)
        data = { ...data, id: result.invengine_id, token:result.token };
        // console.log('newdata: ', data)
        dispatch({
          type:'obtaining_id&token_from_server_success',
          id: result.invengine_id, token: result.token
        });
        dispatch(dispatchSendInvites(data));
      }
      catch(e) {
        dispatch({
          type:'obtaining_id&token_from_server_failure',
          e
        });
      }
    }
  }
  thunk.meta = {
    debounce: {
      time: 2000,
      key: 'my-thunk-action'
    }
  };
  return thunk
}


export function dispatchSendInvites(data) {
  return async dispatch => {
    dispatch({
      type: 'send_invites',
      data_to_send: data
    });

    try {
      const result = await post(`http://localhost:5000/api/invites/${data.id}`, data);
      // const result = await post(`/api/invites/${id}`, data); //uncomment this after implmemtning python api endpoint logic
      console.log('result after posting to /api/invite is: ', result)
      dispatch({
        type: 'send_invites_success',
        invite_done: result.success // get rid of this line
      });
      dispatch(invitesSent());
    } catch(e) {
      dispatch({
        type: 'send_invites_failure',
        error: e
      });
    }
  }
}
