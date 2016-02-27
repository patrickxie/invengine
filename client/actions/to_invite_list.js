export function toggle(id, status) {
  return dispatch => dispatch(
        { type: 'toggled',
          id, status
         });
}

