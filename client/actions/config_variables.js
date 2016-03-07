import { get, post, del } from '../utils/api';

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
    let data = { url:configvars.url, invites: assistvars};
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

// if !result 
//    sendInvites()

// export function requestKittens() {
//   return async dispatch => {
//     dispatch({
//       type: actionTypes.REQUEST_KITTENS
//     });

//     try {
//       const result = await get('/api/kittens');

//       dispatch({
//         type: actionTypes.REQUEST_KITTENS_SUCCESS,
//         kittens: result
//       });
//     } catch(e) {
//       dispatch({
//         type: actionTypes.REQUEST_KITTENS_ERROR
//       });
//     }
//   }
// }

// export function deleteKitten(kittenId) {
//   return async dispatch => {
//     dispatch({
//       type: actionTypes.DELETE_KITTEN,
//       kittenId
//     });

//     try {
//       await del(`/api/kittens/${kittenId}`);

//       dispatch({
//         type: actionTypes.DELETE_KITTEN_SUCCESS,
//         kittenId
//       });
//     } catch(e) {
//       dispatch({
//         type: actionTypes.DELETE_KITTEN_ERROR,
//         kittenId
//       });
//     }
//   }
// }
