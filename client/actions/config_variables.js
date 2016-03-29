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
    if ( data.id&&data.token ) {
      console.log('id & token', data.id&&data.token)
      console.log(JSON.stringify(data))
      dispatch(dispatchSendInvites(data))
    }
    else {
      dispatch({
        type:'obtaining_id&token_from_server' });
      try {
        const result = await get(`http://localhost:5000/api/users`);
        // const result = await get(`/api/users/${data.id}`);//uncomment this for local web
        data = { ...data, id: result.id, token:result.token };
        dispatch({
          type:'obtaining_id&token_from_server_success',
          id: result.id, token: result.token
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
}
    // if ( !data.id && !data.token ){
    //   dispatch({type:getting id and token})
    //   try{
    //       const result = await get(`/api/users/${data.id}`)
    //       data.id = result.id
    //       data.token = result.token

    //       dispatch token success
    //       dispatch(dispatchSendInvites(data))
    //   }
    //   catch(e){
    //       dispatch token failure
    //   }
    // }
    // let id = 'zedshen';
    // console.log('id is: ', id)
    // console.log(JSON.stringify(data));


    // dispatch({
    //   type: 'send_invites',
    // });

    // try {
    //   const result = await post(`http://localhost:5000/api/invites/${id}`, data);
    //   // const result = await post(`/api/invites/${id}`, data); //uncomment this after implmemtning python api endpoint logic
    //   dispatch({
    //     type: 'send_invites_success',
    //     USER_ID: result.id
    //   });
    // } catch(e) {
    //   dispatch({
    //     type: 'send_invites_failure',
    //     error: e
    //   });
    // }


export function dispatchSendInvites(data) {
  return async dispatch => {
    dispatch({
      type: 'send_invites',
      data_to_send: data
    });

    try {
      const result = await post(`http://localhost:5000/api/invites/${data.id}`, data);
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
