const placeholder = { large: 'http://i.imgur.com/6bWhVT3.png?1' ,
 medium: 'http://i.imgur.com/6bWhVT3.png?1' };

const DEFAULT_STATE = [ placeholder ]; //what if i just add a buffer pic here

const add = (state, action) => ([
  ...state,
  { large: action.picLarge, medium: action.picMedium }
]);

const browse = (state, action) =>{
  return ([
    ...state.slice(1,state.length), state[0]
  ]);
}

export default function pictures(state = DEFAULT_STATE, action) {
  return ({
    ['request_picture_valid']: add,
    ['browse_next_picture']: browse,
    // ['set_picture_into_data']: setPic,
  }[action.type] || (s => s))(state, action);
}
