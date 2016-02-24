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
      // console.log('this is contacts_data.js called');
      // const result = await get('/api/kittens/sampledata');
      //these are unfiltered results
      const result = await get('https://api.myjson.com/bins/1mnjz');
      //these are filtered results
      // const result = await get('https://api.myjson.com/bins/1vjxb');
      // console.log('I got dee results', result);
      dispatch({
        type: 'obtain_data_api_success',
        data: result
      });
    } catch(e) {
      // console.log('okay error happened here:: ', e);
      dispatch({
        type: 'obtain_data_api_failure',
        e
      });
    }
  }
}


// export function changeSort(sorteddata) {
//   console.log('wtttff');
//   return dispatch => { dispatch(
//     { type: 'data_sort_swap', data: sorteddata }
//     )};
// }
export function changeSort(sorteddata) {
  // console.log('changeSort called.');
  return dispatch => { dispatch(
    { type: 'data_sort_swap', data: sorteddata }
    )};
}

