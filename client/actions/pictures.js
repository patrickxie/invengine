import { get } from '../utils/api';

export function setPic(key) {
  return (dispatch, getState) =>{
    dispatch ({
      type: 'browse_next_picture',
    // pic: getState().pictures
    });
    dispatch(
      {
        type: 'set_picture_into_data',
        picLarge: getState().pictures[0].large,
        picMedium: getState().pictures[0].medium,
        key
      });
  };
}

export function generatePic(attempt) {
  ++attempt;
  let num = Math.floor((Math.random() * 1000) + 1);
  let picLarge = `https://unsplash.it/600/377?image=${num}`
  let picMedium = `https://unsplash.it/200/200?image=${num}`
  return async dispatch => {
    dispatch({
      type: 'request_picture'
    });

    try {
      await get(picLarge);

      dispatch({
        type: 'request_picture_valid',
        picLarge, picMedium
      });
    } catch(e) {
      dispatch({
        type: 'request_picture_not_valid'
      });
      if (attempt < 7) {
        console.log('dispatched agin')
        dispatch(generatePic(attempt));
      };
    }
  }
}
