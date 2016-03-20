import { get, post, del } from '../utils/api'; //eslint-disable-line
//requestLocalStorageData() from local storage
//requestAPIData() from api
//requestImportData() from auth page


export function requestAPIData() {
  return async dispatch => {
    dispatch({
      type: 'obtain_data_api'
    });

    try {
      // console.log('before fetching api called');
      // const result = await get('/api/kittens/sampledata');
      //these are unfiltered results
      //change this
      const result = await get('https://api.myjson.com/bins/1mnjz');
      //these are filtered results
      // const result = await get('https://api.myjson.com/bins/1vjxb');
      // console.log('I got dee results', result);
      dispatch({
        type: 'obtain_data_api_success',
        data: result
      });
      // dispatch(mergeData(result));
    } catch(e) {
      // console.log('okay error happened here:: ', e);
      dispatch({
        type: 'obtain_data_api_failure',
        e
      });
    }
  }
}




export function requestData() {
  return (dispatch, getState) => {
    // console.log('warrning!!!!!');
    dispatch({
      type: 'obtain_data'
    });
    let { data, imported } = getState();

    let r = imported.length ? dispatch(mergeData(imported)) ://eslint-disable-line
      data.length? null : dispatch(requestAPIData());
  }
}

function mergeData(data) {
  // return { type: 'merge_data_from_imported', data }
  return dispatch => {
    dispatch(
      { type: 'merge_data_from_imported', data }
    );
    dispatch(
      { type: 'transfered_to_data' }
    );
  }
}

export function changeSort(sorteddata) {
  return dispatch => { dispatch(
    { type: 'data_sort_swap', data: sorteddata }
    )};
}

