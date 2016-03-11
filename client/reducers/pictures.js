const DEFAULT_STATE = [];

const add = (state, action) => ([
  ...state,
  { large: action.picLarge, medium: action.picMedium }
]);

// const setPic = (state, action) =>([
 
// ])

const browse = (state, action) =>{
  // debugger;
  return ([
    ...state.slice(1,state.length), state[0]
    //reshuffle the order, move the first element to the last
  ]);
}

export default function pictures(state = DEFAULT_STATE, action) {
  return ({
    ['generate_picture']: add,
    ['browse_next_picture']: browse,
    // ['set_picture_into_data']: setPic,
  }[action.type] || (s => s))(state, action);
}
