const DEFAULT_STATE = [];

const addimport = (state, action) => ([
  ...state,
  action.contacts
]);

// const single = (state, action) => ([
//   ...state,
//   action.contact
// ]);

const transfered = (state, action) => ( DEFAULT_STATE )

export default function imported(state = DEFAULT_STATE, action) {
  return ({
    ['import_multiple_contacts']: addimport,
    ['import_single_contact']: addimport,
    ['transfered_to_data']: transfered
  }[action.type] || (s => s))(state, action);
}
