import { get, post, del } from '../utils/api'; //eslint-disable-line

export function inputUrl(url) {
  return dispatch => dispatch(
    { type: 'input_url',
      url
    });
}


export function sendInvites() {
  return async (dispatch, getState) => {
    let { assistvars, configvars } = getState();
    //add USER_ID: configvars.USER_ID here
    let data = { url:configvars.url, invites: assistvars };
    dispatch({
      type: 'send_invites',
    });

    try {
      const result = await post('https://httpbin.org/post', data);
      dispatch({
        type: 'send_invites_success',
        USER_ID: result
      });
    } catch(e) {
      dispatch({
        type: 'send_invites_failure',
        error: e
      });
    }
  }
}
