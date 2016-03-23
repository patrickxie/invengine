const default_message = 'Hey, I am sharing this link to you via invengine.co'

const DEFAULT_STATE = { url: '', details:[], invengine_id:'',
  token:'', message: default_message };


const url = (state, action) => ({
  ...state,
  url : action.url
});

const message = (state, action) => ({
  ...state,
  message : action.message
});



const details = (state, action) => ({
  ...state,
  details: [ ...state.details, action.owner ]
})

const userID = (state, action) => ({
  ...state,
  invengine_id: state.invengine_id === action.USER_ID ?
  state.invengine_id:  action.USER_ID,
  message: default_message,
  url: ''
})

//add ['SEND_INVITE_SUCCESS']: userID
export default function to_invite_list(state = DEFAULT_STATE, action) {
  // console.log('ayyyy');
  return ({
    ['input_url']: url,
    ['input_custom_invite_message']: message,
    ['add_import_peripheral_details']: details,
    ['send_invites_success']: userID
    // ['untoggled']: untoggle
  }[action.type] || (s => s))(state, action);
}
