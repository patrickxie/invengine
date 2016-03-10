const DEFAULT_STATE = [];

const add = (state, action) => ([
    ...state,
    action.picture
]);

const setPic = (state, action) =>([
  
])


export default function pictures(state = DEFAULT_STATE, action) {
  return ({
    ['generate_picture']: add,
    ['set_picture_into_data']: setPic,
  }[action.type] || (s => s))(state, action);
}