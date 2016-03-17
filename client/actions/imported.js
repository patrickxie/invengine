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



// export function consent(source) {
//   let url = `/begin_import/${source}`;
//   console.log('url is:', url);
//   return dispatch => dispatch(
//     {
//       type:'contactbook_endpoint_consent',
//       source
//     });
// }

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


export function addMultipleContacts(contacts, owner, source) {
  const result = contacts.map((contact)=>{
    let exist = (entity) => contact[entity] && contact[entity].length>0 ? true: false;
    let item = {
      first_name: exist('first_name')? contact.first_name: 'TACO',
      last_name: exist('last_name') ? contact.last_name: 'NACHO',
      email: exist('email') ? contact.email[0].address: '',
      phone: exist('phone') ? contact.phone[0].number: '',
      address: exist('address')? contact.addresses[0].formatted : '',
      extra_email: exist('email') ? contact.email.slice(1): [],
      extra_phone: exist('phone') ? contact.phone.slice(1): [],
      extra_addresses: exist('addresses')? contact.addresses.slice(1) : '',
      picture: exist('photos')? contact.photos.slice(0,1) :
        [{
          large: 'https://d1fy1ym40biffm.cloudfront.net/images/default-avatar.png',
          medium: 'https://d1fy1ym40biffm.cloudfront.net/images/default-avatar.png'
        }],
      company: exist('companies') ? contact.companies.slice(0,1):'',
      title: exist('job_title') ? contact.job_title: ''
    };
    return item;
  });

  return dispatch =>{
    dispatch(
      {
        type:'import_multiple_contacts',
        contacts: result
      });
    dispatch(
      {
        type:'add_import_peripheral_details',
        owner, source
      });
  }
}
