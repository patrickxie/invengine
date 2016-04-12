import { get, post, del } from '../utils/api'; //eslint-disable-line
// import * as _ from 'lodash';
import { actions as notifActions } from 're-notif';
const { notifSend, notifClear } = notifActions;

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

// function validator (email, url, message) {
//   return dispatch => {
//     if (!validateEmail(email)) {
//       dispatch(
//         notifSend({ message: 'email was invalid, please try again', kind: 'warning', dismissAfter: 2000 })
//       );
//     }
//     if (!validateUrl(url)) {
//       dispatch(
//         notifSend({ message: 'url was invalid, please try again', kind: 'warning', dismissAfter: 2000 })
//       );
//     }
//   }
// }

// export function inputMail(mail) {
//   return dispatch =>{
    // validateEmail(mail) ? dispatch(
    //   { type: 'input_email',
    //     mail
    //   }): dispatch(notifSend({ message: 'email was invalid, please try again',
    // dismissAfter: 2000 }));

//   }
// }
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


// function get(obj, key) {
//   return key.split(".").reduce(function(o, x) {
//       return (typeof o == "undefined" || o === null) ? o : o[x];
//   }, obj);
// }

// gotta turn these statements into ifs, that will stop the function from executing
//  if there are invalid url or emails

  // validateUrl(data.url) ? null : dispatch(notifSend({ message: 'url was invalid, please try again',
  //   dismissAfter: 2000 }));
  // validateEmail(data.owner_info[0].email[0].address) ? null :
  //  dispatch(notifSend({ message: 'email was invalid, please try again',
  //   dismissAfter: 2000 }));
export function sendInvites() {
  const thunk = async (dispatch, getState) => {
    //NEEED A VALIDATION CHECK HERE FOR URL & EMAIL
  // return async (dispatch, getState) => {
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
       //data value checker, if doesn't work then dispatch a err message
       // this same err message will display success upon success
    if ( data.id&&data.token ) {
      // console.log('id & token', data.id&&data.token)
      // console.log(JSON.stringify(data))
      dispatch(dispatchSendInvites(data))
      // dispatch(throttled(data));
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
        // dispatch(throttled(data));
      }
      catch(e) {
        dispatch({
          type:'obtaining_id&token_from_server_failure',
          e
        });
      }
    }
  }
  // thunk.meta = {
  //   debounce: {
  //     time: 2000,
  //     key: 'my-thunk-action'
  //   }
  // };
  return thunk;
}


// var throttled = _.throttle(dispatchSendInvites, 300000)

export function dispatchSendInvites(data) {
  const thunk = async dispatch => {
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
        // invite_done: result.success // get rid of this line
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
