// generate default picture

// set new picture
export function generatePic() {
  let num = Math.floor((Math.random() * 1000) + 1);
  // let picture = `https://unsplash.it/600/377?image=${num}`
  let picLarge = `https://unsplash.it/600/377?image=${num}`
  let picMedium = `https://unsplash.it/200/200?image=${num}`
  return dispatch => dispatch({
    type:'generate_picture',
    picLarge, picMedium
  });
}

export function setPic(key) {
  console.log('key is:', key);
  // return (dispatch, getState) =>{
  return (dispatch, getState) =>{
    dispatch ({
      type: 'browse_next_picture',
    // pic: getState().pictures
    });
  };
}

