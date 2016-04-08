const default_message = 'Hey, I am sharing this link to you via invengine.co'

const DEFAULT_STATE = { url: '', details:[], invengine_id:'',
  token:'', message: default_message };

const url = (state, action) => ({
  ...state,
  url : action.url
});

const mail = (state, action) => ({
  ...state,
  details : [{ email : [{ address: action.mail }] }]
});

const message = (state, action) => ({
  ...state,
  message : action.message
});

const details = (state, action) => ({
  ...state,
  details: [ ...state.details, action.owner ]
})

const reset = (state, action) => ({
  ...state,
  message: default_message,
  url: '',
  invite_done: action.invite_done //remove
})

const addToken = (state, action) => ({
  ...state,
  invengine_id : action.id,
  token: action.token
})

export default function to_invite_list(state = DEFAULT_STATE, action) {
  return ({
    ['input_url']: url,
    ['input_email']: mail,
    ['input_custom_invite_message']: message,
    ['add_import_peripheral_details']: details,
    ['send_invites_success']: reset,
    ['obtaining_id&token_from_server_success']: addToken
  }[action.type] || (s => s))(state, action);
}
