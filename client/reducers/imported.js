const DEFAULT_STATE = {};

const addimport = (state, action) => ([
  ...state,
  action.data
]);

const transfered = (state, aciton) => ( DEFAULT_STATE )

export default function imported(state = DEFAULT_STATE, action) {
  return ({
    ['import_success']: addimport,
    ['transfered_to_data']: transfered
  }[action.type] || (s => s))(state, action);
}
