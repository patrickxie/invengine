import { get, post, del } from '../utils/api'; 


export function addSingleContact(contacts) {
  return dispatch => dispatch(
    {
      type:'import_single_contact',
      contacts
    });
}

export function addMultipleContacts(contacts) {
  return dispatch => dispatch(
    {
      type:'import_multiple_contacts',
      contacts
    });
}

export function consent(source) {
  let url = `/begin_import/${source}`;
  console.log('url is:', url);
  return dispatch => dispatch(
    {
      type:'contactbook_endpoint_consent',
      source
    });
}


// export function deleteKitten(kittenId) {
//   return async dispatch => {
//     dispatch({
//       type: actionTypes.DELETE_KITTEN,
//       kittenId
//     });

//     try {
//       await del(`/api/kittens/${kittenId}`);

//       dispatch({
//         type: actionTypes.DELETE_KITTEN_SUCCESS,
//         kittenId
//       });
//     } catch(e) {
//       dispatch({
//         type: actionTypes.DELETE_KITTEN_ERROR,
//         kittenId
//       });
//     }
//   }
// }

// https://api.cloudsponge.com/begin_import/user_consent.json

// <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}} />

// {()=>window.open('http://stackoverflow.com/', '_blank')}

// response = {  
//   "status": "success",
//   "url": "https://api.cloudsponge.com/n/FULNW3D",
//   "import_id": 1126
// }