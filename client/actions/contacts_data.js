import { get, post, del } from '../utils/api'; 
//requestLocalStorageData() from local storage
//requestAPIData() from api
//requestImportData() from auth page


export function requestAPIData() {
  console.log('requestAPI data is called!');
  return async dispatch => {
    dispatch({
      type: 'obtain_data_api'
    });

    try {
      console.log('before fetching api called');
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
    console.log('warrning!!!!!');
    dispatch({
        type: 'obtain_data'
    });
    let { data, imported } = getState();
    console.log('ok stuck here', data, imported);

    let r = imported.length ? dispatch(mergeData(imported)) :
      data.length? null : dispatch(requestAPIData());
    console.log('R should b a function: ', r)
    // let hasData = data.length? null : dispatch(requestAPIData());
    // console.log('hasdata: ', hasData)

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


// function importedData(data) {
//   return { type: 'obtain_data_import', data }
// }
// var k = getState().data.length, imported.map( i => i.sort = k)
//find highest key and iterate on top of it.

export function changeSort(sorteddata) {
  // console.log('changeSort called.');
  return dispatch => { dispatch(
    { type: 'data_sort_swap', data: sorteddata }
    )};
}

