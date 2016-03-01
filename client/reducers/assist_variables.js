// // import * as actionTypes from '../actionTypes/kittens';

// const DEFAULT_STATE = {
//   channels:{
//     EM:[],TW:[], FB:[]
//   }
// };
const DEFAULT_STATE = [
  {
    EM:false, FB:false, TW:false, GO:false, RE: false, IN: false, PI:false
  }
];

const generate = (state, action)=>
{
  console.log('generated passed!');
  let a = action.table.map((item,i)=>({
    EM:false, FB:false, TW:false, GO:false, RE: false, IN: false, PI:false
    }));
  console.log('generated this; ', a);
  return  a;
}

const channel_icon_toggle = (state, action) =>{
let a = [
  ...state.slice(0,action.key),
  { ...state[action.key],  [action.channel]:!state[action.key].EM },
  ...state.slice(action.key+1)
  ];
  console.log('after reducer: ', a);
  return a;
};

// const channel_icon_toggle = (state, action) =>{
//   console.log('state &action is: ', state, action);
//   console.log('[action.channel]:[...state.channels[action.channel],action.key]', {[action.channel]:[...state.channels[action.channel],action.key]})
//   console.log();

//   let a = {
//   channels:{
//     [action.channel]:[...state.channels[action.channel],action.key],
//     // ...state.channels
//   } 
// }
//   console.log('what a: ', a);
//     console.log('result.em', a.channels[action.channel]);
//  return a;
// };

export default function assist_variables(state = DEFAULT_STATE, action) {
  console.log('past the reducer!!!');
  return ({
    ['populate_Icon_Table']: generate,
    ['channel_icon_toggle']: channel_icon_toggle
  }[action.type] || (s => s))(state, action);
}
