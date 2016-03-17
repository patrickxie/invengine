import { get, post, del } from '../utils/api';

export function generatePic() {
  let num = Math.floor((Math.random() * 1000) + 1);
  let picLarge = `https://unsplash.it/600/377?image=${num}`
  let picMedium = `https://unsplash.it/200/200?image=${num}`
  return dispatch => dispatch({
    type:'generate_picture',
    picLarge, picMedium
  });
}

export function setPic(key) {
  return (dispatch, getState) =>{
    dispatch ({
      type: 'browse_next_picture',
    // pic: getState().pictures
    });

    console.log('current photo is: ', getState().pictures[0].large)
    dispatch(
      {
        type: 'set_picture_into_data',
        picLarge: getState().pictures[0].large,
        picMedium: getState().pictures[0].medium,
        key
      });
  };
}




// function Axion(dispatch, contacts) {
//   console.log('ayyy lmao');
  
//   dispatch({ type: 'import_multiple_contacts', contacts:result })
//   // dispatch({ type: 'DURTYDATA', contacts})
// }



    // picture: [{
    //   large: `https://unsplash.it/600/377?image=${num}`
    // }
    // ],

// export function deleteKitten(kittenId) {
//   return async dispatch => {
//     dispatch({
//       type: actionTypes.DELETE_KITTEN,
//       kittenId
//     });

//     try {
//       await get(piclarge);

//       dispatch({
//         type: actionTypes.DELETE_KITTEN_SUCCESS,
//         kittenId
//       });
//     } catch(e) {
//       dispatch({
//         type: actionTypes.DELETE_KITTEN_ERROR,
//         kittenId
//       });
//     }
//   }
// }

