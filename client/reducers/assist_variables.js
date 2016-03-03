const DEFAULT_STATE = [
  {
    EM:false, FB:false, TW:false, GO:false, RE: false, IN: false, PI:false, first_name: 'test', last_name: 'ikle', picture:[
      {
        "large": "http://api.randomuser.me/portraits/men/31.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/31.jpg"
      },
      {
        "large": "http://api.randomuser.me/portraits/men/27.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/27.jpg"
      }
    ]
  }
];

const generate = (state, action)=>
{
  let a = action.table.map( item =>({
    EM:false, FB:false, TW:false, GO:false, RE: false, IN: false, PI:false, ...item
    }));
  return  a;
}

const channel_icon_toggle = (state, action) =>{
let a = [
  ...state.slice(0,action.key),
  { ...state[action.key],  
    [action.channel]:!state[action.key][action.channel]
  },
  ...state.slice(action.key+1)
  ];
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
  return ({
    ['populate_Icon_Table']: generate,
    ['channel_icon_toggle']: channel_icon_toggle
  }[action.type] || (s => s))(state, action);
}
