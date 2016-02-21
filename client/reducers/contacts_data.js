// import * as actionTypes from '../actionTypes/kittens';

const DEFAULT_STATE = [];

const api = (state, action) => (
  action.data
);

const localstorage = (state, action) => ([
  ...state,
  ...action.kittens
]);

const importData = (state, action) => ([
  ...state,
  ...action.kittens
]);


export default function contacts_data(state = DEFAULT_STATE, action) {
  return ({
    ['obtain_data_localstorage_success']: localstorage,
    ['obtain_data_api_success']: api,
    ['obtain_data_import_success']: importData
  }[action.type] || (s => s))(state, action);
}
