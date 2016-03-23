import { get, post, del } from '../utils/api'; //eslint-disable-line

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
  return async (dispatch, getState) => {
    let { assistvars, configvars } = getState();
    let data = { id: configvars.invengine_id, token: configvars.token,
        url:configvars.url, owner_info: configvars.details,
       invites: assistvars, custom_message: configvars.message };
    // let id = configvars.invengine_id;  //uncomment this after implmemtning python api endpoint logic
    let id = 'zedshen';
    console.log('id is: ', id)
    console.log(JSON.stringify(data));
    dispatch({
      type: 'send_invites',
    });

    try {
      const result = await post(`http://localhost:5000/api/invites/${id}`, data);
      // const result = await post(`/api/invites/${id}`, data); //uncomment this after implmemtning python api endpoint logic
      dispatch({
        type: 'send_invites_success',
        USER_ID: result.id
      });
    } catch(e) {
      dispatch({
        type: 'send_invites_failure',
        error: e
      });
    }
  }
}

