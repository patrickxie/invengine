const DEFAULT_STATE = { url: '', details:[], invengine_id:'' };

const url = (state, action) => ({
  ...state,
  url : action.url
});

const details = (state, action) => ({
  ...state,
  details: [ ...state.details, action.owner ]
})

// const userID = (state, action) => ({
//     ...state,
//     USER_ID: action.USER_ID
// })

//add ['SEND_INVITE_SUCCESS']: userID
export default function to_invite_list(state = DEFAULT_STATE, action) {
  // console.log('ayyyy');
  return ({
    ['input_url']: url,
    ['add_import_peripheral_details']: details
    // ['untoggled']: untoggle
  }[action.type] || (s => s))(state, action);
}
