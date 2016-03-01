// export function inputUrl(url){
//     return dispatch => dispatch(
//         { type: 'input_url',
//           url
//          });
// }

export function channelIconToggle(key, channel, status){
    return dispatch => dispatch(
    {
        type:'channel_icon_toggle',
        key, channel, status
    });
}

export function populateIconTable(table){
    console.log('GOOOGOGOOO');
    return dispatch=> dispatch(
    {
        type:'populate_Icon_Table',
        table
    });
}

//  {invitees.map(person => (
//           <ListItem key={person.key}
//         primaryText={person.first_name+' '+ person.last_name}
//         leftAvatar={<Avatar src={person.picture[0].medium}/>}>
//          <div style={STYLES.container} >
//             <div className="FUCK" style={channels.EM.indexOf(person.key)>0 ? STYLES.On:STYLES.Off} onClick={channelIconToggle.bind(this, person.key, 'EM')}><EM/></div>
//            </div>
//           </ListItem>
        
// ))}

// channels[i].EM? STYLES.On:

    //      {channels.EM.indexOf(person.key)>0
    // ? <div style={STYLES.On} onClick={()=>channelIconToggle( person.key, 'EM', false)}><EM/></div>
    // :
    // <div style={STYLES.Off} onTouchTap={()=>channelIconToggle( person.key, 'EM', true)}><EM/></div>
    //         }   


     // {invitees.map(person=>(
     //    <div key={person.key}>
     //    <Avatar src={person.picture[0].medium}/>
     //    <p>{person.first_name}{ person.last_name}</p>


     //    </div>
     //    ))}



// style={person.channels.EM? STYLES.On:STYLES.Off} 

// this.props.invitees[this.props.invitees.indexOf(person)].channels.EM


// <div style={this.props.invitees[this.props.invitees.indexOf(person)].
//     channels.EM? STYLES.On:STYLES.Off} 
//     onTouchTap={this.handleClick.
//     bind(this, this.props.invitees.indexOf(person), 'EM')}><EM/></div>


// {this.props.invitees[this.props.invitees.indexOf(person)].
//     channels.EM? <div style={STYLES.On} onTouchTap={this.handleClick.
//     bind(this, this.props.invitees.indexOf(person), 'EM')}><EM/></div>
//     :
//     <div style={STYLES.Off} onTouchTap={this.handleClick.
//     bind(this, this.props.invitees.indexOf(person), 'EM')}><EM/></div>
// }

// const i = this.props.invitees

// { i[i.indexOf(person)].channels.EM ?

// }


// {i[i.indexOf(person)].channels.EM}


  // state => ({ invitees: state.data.filter((item)=>state.toinvlist[item.key]===true).map(item => ({...item, channels:{
  //   EM:false, FB:false, TW:false, GO:false, RE: false, IN: false, PI:false}
  //   })) }),

//   {
//   channels:[]
// }

// {
//   channels:[{em:true, em:false},]
// }

// invitees[invitees.indexOf(person)]

// const channel_icon_toggle = (state, action) => ({
//   channels:{
//     [action.channel]:[...state.channels[action.channel],action.key],
//     ...state.channels
//   }
// });

// const channel_icon_toggle = (state, action) => {
//   console.log('fuck u', state);
//   return {
//   [action.key]:{[action.channel]:action.status},
//   ...state
// }};
