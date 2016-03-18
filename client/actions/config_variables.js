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
    let data = { url:configvars.url, invites: assistvars };
    // let id = configvars.invengine_id;
    let id = 'zedshen';
    console.log('id is: ', id)
    console.log(JSON.stringify(data));
    dispatch({
      type: 'send_invites',
    });

    try {
      const result = await post(`http://localhost:5000/api/invites/${id}`, data);
      // const result = await post(`/api/invites/${id}`, data);
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
