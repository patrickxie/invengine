// import * as actionTypes from '../actionTypes/kittens';
import * as _ from 'lodash';

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

const setPic = (state, action) => {
  var index = _.findIndex(state, function(item) { return item.key===action.key; });
  const result = [
    ...state.slice(0, index),
    { 
      ...state[index],
      picture: 
      [
        { large: action.picLarge, medium: action.picMedium },
        ...state[index].picture
      ]
    },
    ...state.slice(index+1)
  ];
  return result;
} ;

//index is not index, instead it's the object

// (
//   //find the index of the object using _.find
//   //slice the state before, 
//   state[key].picture.large: action.pic
//   //slice the state after
// );

export default function contacts_data(state = DEFAULT_STATE, action) {
  return ({
    ['merge_data']: merge,
    ['obtain_data_localstorage_success']: localstorage,
    // ['obtain_data_api_success']: api,
    ['obtain_data_import_success']: importData,
    ['data_sort_swap']: swap,
    ['set_picture_into_data']: setPic
  }[action.type] || (s => s))(state, action);
}
