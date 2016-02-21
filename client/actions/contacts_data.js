// import { get, post, del } from '../utils/api';
import { get } from '../utils/api';
//requestLocalStorageData() from local storage
//requestAPIData() from api
//requestImportData() from auth page


export function requestAPIData() {
  return async dispatch => {
    dispatch({
      type: 'obtain_data'
    });

    try {
      console.log('this is contacts_data.js called'); // eslint-disable-line no-console
      // const result = await get('/api/kittens/sampledata');
      const result = await get('https://api.myjson.com/bins/1mnjz');
      console.log('I got dee results', result);// eslint-disable-line no-console
      dispatch({
        type: 'obtain_data_api_success',
        data: result
      });
    } catch(e) {
      console.log('okay error happened here:: ', e);// eslint-disable-line no-console
      dispatch({
        type: 'obtain_data_api_failure',
        e
      });
    }
  }
}


// export function changeSort() {
//     console.log('wtttff');
//   return dispatch => { dispatch(increaseAction)};
// }

