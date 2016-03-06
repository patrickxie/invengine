import { get, post, del } from '../utils/api';

export function inputUrl(url) {
  return dispatch => dispatch(
      { type: 'input_url',
        url
       });
}


export function sendInvites() {
  return async (dispatch, getState) => {
    const { assistvars, configvars } = getState();
    let data = { url:configvars.url, invites: assistvars};
    dispatch({
      type: 'send_invites',
    });

    try {
      const result = await post('https://httpbin.org/post', data);
      dispatch({
        type: 'send_invites_success',
        success: result
      });
    } catch(e) {
      dispatch({
        type: 'send_invites_failure',
        error: e
      });
      //call this method again, after certain interval
    // console.log('wtf');
    // setTimeout(() => {
    //   console.log('did this hap');
    //   return sendInvites();
    //   console.log('sure did');

    // }, 3000)
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
