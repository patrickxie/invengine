const placeholder = { large: 'http://www.libcrowds.com/static/img/placeholder.project.png' ,
 medium: 'http://www.libcrowds.com/static/img/placeholder.project.png' };

const DEFAULT_STATE = [ placeholder ]; //what if i just add a buffer pic here

const add = (state, action) => ([
  ...state,
  { large: action.picLarge, medium: action.picMedium }
]);

const browse = (state, action) =>{ //eslint-disable-line
  return ([
    ...state.slice(1,state.length), state[0]
  ]);
}

export default function pictures(state = DEFAULT_STATE, action) {
  return ({
    ['request_picture_valid']: add,
    ['browse_next_picture']: browse,
  }[action.type] || (s => s))(state, action);
}
