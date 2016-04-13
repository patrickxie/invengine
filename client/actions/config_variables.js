import { get, post, del } from '../utils/api'; //eslint-disable-line
import { actions as notifActions } from 're-notif';
const { notifSend } = notifActions;

export function invitesSent() {
  return dispatch => dispatch(
    notifSend({ message: 'invites have been sent', kind: 'info', dismissAfter: 1000 })
  )
}

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
  return re.test(email);
}

function validateUrl (url) {
  let re =/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i; //eslint-disable-line
  return re.test(url)
}

export function inputUrl(url) {
  return dispatch => dispatch({
    type: 'input_url',
    url,
    meta: {
      debounce: {
        time: 300
      }
    }
  });
}

export function inputMail(mail) {
  return dispatch => dispatch({
    type: 'input_email',
    mail
  });
}

export function sendMessage(message) {
  return dispatch => dispatch({
    type: 'input_custom_invite_message',
    message
  });
}

export function sendInvites() {
  const thunk = async (dispatch, getState) => {
    console.log('state.data is: ', JSON.stringify(getState().data))
    let { assistvars, configvars } = getState();
    let data = { id: configvars.invengine_id, token: configvars.token,
        url:configvars.url, owner_info: configvars.details,
       invites: assistvars, custom_message: configvars.message };
    if (!validateUrl(data.url)) {
      dispatch(notifSend({ message: 'url was invalid, please try again', kind:'warning', 
        dismissAfter: 2000 }));
      return
    };
    let isEmail = '';
    if (data.owner_info && data.owner_info[0] &&
       data.owner_info[0].email &&
       data.owner_info[0].email[0] &&
       data.owner_info[0].email[0].address ) {
      isEmail = data.owner_info[0].email[0].address
    };
    if (!validateEmail(isEmail)) {
      dispatch(notifSend({ message: 'email was invalid, please try again', kind:'warning',
      dismissAfter: 2000 }));
      return
    };
    if ( data.id&&data.token ) {
      dispatch(dispatchSendInvites(data))
    }
    else {
      dispatch({
        type:'obtaining_id&token_from_server' });
      try {
        // const result = await get(`http://localhost:5000/api/users`);
        const result = await get(`/api/users`);
        data = { ...data, id: result.invengine_id, token:result.token };
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
  return thunk;
}

export function dispatchSendInvites(data) {
  const thunk = async dispatch => {
    dispatch({
      type: 'send_invites',
      data_to_send: data
    });

    try {
      // const result = await post(`http://localhost:5000/api/invites/${data.id}`, data);
      const result = await post(`/api/invites/${data.id}`, data);
      dispatch({
        type: 'send_invites_success',
        result
      });
      dispatch(invitesSent());
    } catch(e) {
      dispatch({
        type: 'send_invites_failure',
        error: e
      });
    }
  }
  return thunk;
}
