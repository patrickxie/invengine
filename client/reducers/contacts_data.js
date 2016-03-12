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

const api = (state, action) => ([
  ...action.data
]);

// const merge = (state, action) => {
//   //takes state, and action, and merge together
//   // then it adds sort and key, and removes duplicates
//   //should take the highest Key too to remove 
//   return action.data
// };

const merge = (state, action) => {
  //takes state, and action, and merge together
  // then it adds sort and key, and removes duplicates
  //should take the highest Key too to remove 
  // let primary = [ ...state, ...action ];
  let incrementItem = _.maxBy(state, 'key');
  let incrementVal = incrementItem.key;
  let keyedData = action.data.map((item, index)=>({ ...item,
    key:index+incrementVal+1 }));
  let primary = _.unionBy(state, keyedData, 'key');
  console.log('primary: ', primary);
  let secondary = primary.map((item,index)=>(
    { ...item,
      sort:index,
      picture:[{ 
        large:item.picture[0].large?
         item.picture[0].large: 'https://d1fy1ym40biffm.cloudfront.net/images/default-avatar.png',
        medium:item.picture[0].medium ?
         item.picture[0].medium: 'https://d1fy1ym40biffm.cloudfront.net/images/default-avatar.png'
        }]
    }));
  let result = secondary;
  return result;
};

//remove duplicate
// _.maxby
// addSort(){

// }
// addKey(){

// }
//adds a default avatar too

// 1. find the highest key in state(aka state.data), this key will be used
// later to increment after both the state(data) and action(imported),
// 2. since action has no key property, we can't join with _.unionBy,
// so we need tomap action.data with key property starting from increment value,
// 3. now that we  



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

export default function contacts_data(state = DEFAULT_STATE, action) {
  return ({
    ['merge_data_from_imported']: merge,
    // ['obtain_data_localstorage_success']: localstorage,
    ['obtain_data_api_success']: api,
    // ['obtain_data_import_success']: importData,
    ['data_sort_swap']: swap,
    ['set_picture_into_data']: setPic
  }[action.type] || (s => s))(state, action);
}
