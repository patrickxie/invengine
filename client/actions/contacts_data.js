import { get, post, del } from '../utils/api'; //eslint-disable-line
//requestLocalStorageData() from local storage
//requestAPIData() from api
//requestImportData() from auth page


export function requestAPIData() {
  return async ( dispatch, getState ) => {
    dispatch({
      type: 'obtain_data_api'
    });
    // if ( getState().configvars.invengine_id &&
    //      getState().configvars.token ) {
    let id = getState().configvars.invengine_id
    let token = getState().configvars.token
    try {
      // const result = await get('https://api.myjson.com/bins/2bwgk');
      const result = await get(`https://localhost:5000/api/contacts/${id}/${token}`);
      // const result = await get(`/api/contacts/${id}`); //uncomment this later
      dispatch({
        type: 'obtain_data_api_success',
        data: result.data
      });
      // dispatch(mergeData(result));
    } catch(e) {
      // console.log('okay error happened here:: ', e);
      dispatch({
        type: 'obtain_data_api_failure',
        e
      });
    }
    // } else{

    // };
  }
}

export function saveContactsToServer () {
  return async (dispatch, getState) => {
    // const { data , configvars } = getState();
    const configvars = getState().configvars;
    const d = getState().data
    let data = { contacts: d, token: configvars.token, id: configvars.invengine_id }
    if (data.id&&data.token) {
      dispatch(dispatchSendContacts(data))
    } else {
      dispatch({
        type:'obtaining_id&token_from_server' });
      try {
        const result = await get(`http://localhost:5000/api/users`);
        // const result = await get(`/api/users/${data.id}`);//uncomment this for local web
        data = { ...data, id: result.invengine_id, token: result.token };
        dispatch({
          type:'obtaining_id&token_from_server_success',
          id: result.invengine_id, token: result.token
        });
        dispatch(dispatchSendContacts(data));
      }
      catch(e) {
        dispatch({
          type:'obtaining_id&token_from_server_failure',
          e
        });
      }
    };
  }
}


export function dispatchSendContacts(data) {
  return async dispatch => {
    dispatch({
      type: 'sending_contacts_to_server',
      data_to_send: data
    });

    try {
      const result = await post(`http://localhost:5000/api/contacts/${data.id}`, data);
      // const result = await post(`/api/contacts/${id}`); //uncomment this after implmemtning python api endpoint logic
      dispatch({
        type: 'sending_contacts_to_server_success',
        data: result
      });
    } catch(e) {
      dispatch({
        type: 'sending_contacts_to_server_failure',
        e
      });
    }

  }
}



export function requestData() {
  return (dispatch, getState) => {
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

