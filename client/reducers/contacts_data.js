import * as _ from 'lodash';

const DEFAULT_STATE = [];

const swap = (state, action) => (
  action.data
);

const api = (state, action) => ([
  ...action.data
]);


const merge = (state, action) => {
  let incrementItem = state.length? _.maxBy(state, 'key'): { key:0 };
  let incrementVal = incrementItem.key;
  let keyedData = action.data.map((item, index)=>({ ...item,
    key:index+incrementVal+1 }));
  let primary = _.unionBy(state, keyedData, 'key');
  let result = primary.map((item,index)=>(
    { ...item,
      sort:index+1,
      picture:[{
        large:item.picture[0].large?
         item.picture[0].large: 'https://d1fy1ym40biffm.cloudfront.net/images/default-avatar.png',
        medium:item.picture[0].medium ?
         item.picture[0].medium: 'https://d1fy1ym40biffm.cloudfront.net/images/default-avatar.png'
      }]
    }));
  return result;
};



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
    ['obtain_data_api_success']: api,
    ['data_sort_swap']: swap,
    ['set_picture_into_data']: setPic
  }[action.type] || (s => s))(state, action);
}
