// import * as actionTypes from '../actionTypes/kittens';

const DEFAULT_STATE = {};

const url = (state, action) => ({
  ...state,
  url : action.url
});


// const userID = (state, action) => ({
//     ...state,
//     USER_ID: action.USER_ID
// })

//add ['SEND_INVITE_SUCCESS']: userID
export default function to_invite_list(state = DEFAULT_STATE, action) {
  // console.log('ayyyy');
  return ({
    ['input_url']: url,
    // ['untoggled']: untoggle
  }[action.type] || (s => s))(state, action);
}
