import { get, post, del } from '../utils/api'; 
import faker from 'faker';

// console.log(faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'));

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

export function generateContact() {
  // let num = Math.floor((Math.random() * 1000) + 1);
  //medium image is 150 x 150, large 512 x512
  let num = Math.floor((Math.random()*95)+1);
  let gender = num % 2 ? 'men':'women';
  const contacts = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    picture: [{
      large: `https://unsplash.it/600/377?image=${num}`,
      medium: `http://api.randomuser.me/portraits/med/${gender}/${num}.jpg`
    }
    ],
    phone: faker.phone.phoneNumber(),
    avatar: `http://api.randomuser.me/portraits/med/${gender}/${num}.jpg`,
    website: faker.internet.url(),
    email:faker.internet.email(),
    address: `${faker.address.streetAddress()}, ${faker.address.secondaryAddress()}
    ${faker.address.city()}, ${faker.address.stateAbbr()}. ${faker.address.zipCode()}`,
    company: faker.company.companyName(),
    title: faker.name.jobTitle(),
    fake: true
  }
  return dispatch => dispatch(
    {
      type:'generated_contact',
      contacts
    });
}

    // picture: [{
    //   large: `https://unsplash.it/600/377?image=${num}`
    // }
    // ],

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

// <Link to='route' target='_blank' onClick={(event) => {event.preventDefault(); window.open(this.makeHref('route'));}} />

// {()=>window.open('http://stackoverflow.com/', '_blank')}

// response = {  
//   'status': 'success',
//   'url': 'https://api.cloudsponge.com/n/FULNW3D',
//   'import_id': 1126
// }