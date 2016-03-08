import { get, post, del } from '../utils/api'; 
//requestLocalStorageData() from local storage
//requestAPIData() from api
//requestImportData() from auth page


export function requestAPIData() {
  return async dispatch => {
    dispatch({
      type: 'obtain_data_api'
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
      });
      dispatch(mergeData(result));
    } catch(e) {
      // console.log('okay error happened here:: ', e);
      dispatch({
        type: 'obtain_data_api_failure',
        e
      });
    }
  }
}




export function requestData(){
  return async (dispatch, getState) => {
    dispatch({
        type: 'obtain_data'
    });
    let { data, imported } = getState();
    imported.length ? dispatch(mergeData(imported)) : hasData;
    let hasData = data.length? null : requestAPIData();

  }
}

function mergeData(data){
  return { type: 'merge_data', data }
}

// var k = getState().data.length, imported.map( i => i.sort = k)
//find highest key and iterate on top of it.

export function changeSort(sorteddata) {
  // console.log('changeSort called.');
  return dispatch => { dispatch(
    { type: 'data_sort_swap', data: sorteddata }
    )};
}

