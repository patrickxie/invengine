export function toggle(id, status){
    // console.log('lmmao');
    return dispatch => dispatch(
        { type: 'toggled',
          id, status
         });
}

