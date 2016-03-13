let placeholder = { large: 'http://image-link-archive.meteor.com/images/placeholder-640x480.png' , medium: 'http://image-link-archive.meteor.com/images/placeholder-640x480.png' };

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
    ['generate_picture']: add,
    ['browse_next_picture']: browse,
    // ['set_picture_into_data']: setPic,
  }[action.type] || (s => s))(state, action);
}
