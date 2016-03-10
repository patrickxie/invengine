// import * as actionTypes from '../actionTypes/kittens';

const DEFAULT_STATE = [];

// const api = (state, action) => (
//   action.data
// );


const swap = (state, action) => (
  action.data
);

const localstorage = (state, action) => ([
  ...state,
  ...action.kittens
]);

const importData = (state, action) => ([
  ...state,
  ...action.kittens
]);

const merge = (state, action) => {
  //takes state, and action, and merge together
  // then it adds sort and key, and removes duplicates
  //should take the highest Key too to remove 
  return action.data
}

// addSort(){

// }
// addKey(){

// }

//handle picture

export default function contacts_data(state = DEFAULT_STATE, action) {
  return ({
    ['merge_data']: merge,
    ['obtain_data_localstorage_success']: localstorage,
    // ['obtain_data_api_success']: api,
    ['obtain_data_import_success']: importData,
    ['data_sort_swap']: swap
  }[action.type] || (s => s))(state, action);
}
