import { get, post, del } from '../utils/api'; //eslint-disable-line

export function requestAPIData() {
  return async ( dispatch, getState ) => {
    dispatch({
      type: 'obtain_data_api'
    });
    let id = getState().configvars.invengine_id
    let token = getState().configvars.token
    try {
      // const result = await get(`http://localhost:5000/api/contacts/${id}/${token}`);
      const result = await get(`/api/contacts/${id}/${token}`);

      dispatch({
        type: 'obtain_data_api_success',
        data: result.data
      });
    } catch(e) {
      dispatch({
        type: 'obtain_data_api_failure',
        e
      });
    }
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
        // const result = await get(`http://localhost:5000/api/users`);
        const result = await get(`/api/users`);
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
  const thunk = async dispatch => {
    dispatch({
      type: 'sending_contacts_to_server',
      data_to_send: data
    });

    try {
      // const result = await post(`http://localhost:5000/api/contacts/${data.id}/${data.token}`, data);
      const result = await post(`/api/contacts/${data.id}/${data.token}`, data);
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
  thunk.meta = {
    debounce: {
      time: 30000,
      key: 'my-thunk-action'
    }
  };
  return thunk;
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

