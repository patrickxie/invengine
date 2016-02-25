// import * as actionTypes from '../actionTypes/kittens';

const DEFAULT_STATE = {};


// const untoggle = (state, action) => ([
//   ...state,
//   ...action.kittens
// ]);

const toggle = (state, action) => ({
  ...state,
  [action.id] : action.status
});

const untoggle = (state, action) => (
  state.filter(i => i !== action.id)
);
// const untoggle = (state, action) => (
//   state.filter(kitten => kitten.id !== action.kittenId)
// );


export default function to_invite_list(state = DEFAULT_STATE, action) {
  // console.log('ayyyy');

  return ({
    ['toggled']: toggle,
    ['untoggled']: untoggle
  }[action.type] || (s => s))(state, action);
}
