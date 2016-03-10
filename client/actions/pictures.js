// generate default picture

// set new picture
export function generatePic() {
  let num = Math.floor((Math.random() * 1000) + 1);
  let picture = `https://unsplash.it/600/377?image=${num}`
  return dispatch => dispatch({
    type:'generate_picture',
    picture
  });
}