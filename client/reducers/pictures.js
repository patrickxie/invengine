const DEFAULT_STATE = {};

const add = (state, action) => ([
    ...state,
    action.data
]);
//https://unsplash.it/200/200/?random

export default function assist_variables(state = DEFAULT_STATE, action) {
  return ({
    ['download_picture_success']: add,
    // ['channel_icon_toggle']: channel_icon_toggle,
    // ['toggle_icon_all']: all
  }[action.type] || (s => s))(state, action);
}