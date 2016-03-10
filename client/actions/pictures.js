// generate default picture

// set new picture
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
  // return (dispatch, getState) =>{
  return (dispatch) =>{
    dispatch ({
      type: 'browse_next_picture',
    // pic: getState().pictures
    });

    // console.log('current photo is: ', getState().pictures[0].large)
   // dispatch({
   //  type: 'set_picture_into_data',
   //  picLarge: getState().pictures[0].large,
   //  picMedium: getState().pictures[0].Medium,
   //     key
   // });
  };
}