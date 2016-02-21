require("babel-register");
var assert = require('assert');
var expect = require('chai').expect;
import { requestData } from "../client/actions/contacts_data";



import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

// describe('async actions', () => {
//   afterEach(() => {
//     nock.cleanAll()
//   })

//   it('creates RequestData has been done', (done) => {
//     nock('http://localhost:5000/')
//       .get('/todo/api/v1.0/contacts')
//       .reply(200, sample )

//     const expectedActions = [
//       { type: 'obtain_data' },
//       { type: 'obtain_data_api_success', sample }
//     ]
//     const store = mockStore({ sample : [] }, expectedActions, done)
//     store.dispatch(requestData())
//   })
// })






// describe('API Test 1:', function() {
//   describe('should retrieve data and dispatch to store', function () {
//     it('should check the type of the action object', function () {
//       expect(typeof(requestData())).to.be.equal('object');
//       console.log('what the fuck is returned: ', requestData());
//     });
//   });
// });

// describe('API Test 2:', function() {
//   describe('should retrieve data and dispatch to store', function () {
//     it('should verify the length of the test data ', function () {
//       expect(requestData().data.contacts.length).to.equal(10);
//     });
//   });
// });


// describe('API Test 3:', function() {
//   describe('should retrieve data and dispatch to store', function () {
//     it('should check the type of the action object', function () {
//       expect(requestData().type).to.be.equal('obtain_data_api_success');
//     });
//   });
// });


var sample = {
  "contacts": [
    {
      "first_name": "Louis", 
      "individual_id": 121, 
      "inviteProbability": 0.87, 
      "key": 1, 
      "last_name": "Duncan", 
      "picture": [
        {
          "large": "http://api.randomuser.me/portraits/women/1.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/1.jpg"
        }, 
        {
          "large": "http://api.randomuser.me/portraits/women/2.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/2.jpg"
        }
      ], 
      "sort": 1
    }, 
    {
      "first_name": "Wanda", 
      "individual_id": 322, 
      "inviteProbability": 0.2, 
      "key": 2, 
      "last_name": "Austin", 
      "picture": [
        {
          "large": "http://api.randomuser.me/portraits/women/3.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/3.jpg"
        }, 
        {
          "large": "http://api.randomuser.me/portraits/women/4.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/4.jpg"
        }
      ], 
      "sort": 2
    }, 
    {
      "first_name": "Janice", 
      "individual_id": 453, 
      "inviteProbability": 0.66, 
      "key": 3, 
      "last_name": "Chapman", 
      "picture": [
        {
          "large": "http://api.randomuser.me/portraits/women/5.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/5.jpg"
        }, 
        {
          "large": "http://api.randomuser.me/portraits/women/6.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/6.jpg"
        }
      ], 
      "sort": 3
    }, 
    {
      "first_name": "Andrea", 
      "individual_id": 124, 
      "inviteProbability": 0.83, 
      "key": 4, 
      "last_name": "Bennett", 
      "picture": [
        {
          "large": "http://api.randomuser.me/portraits/women/7.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/7.jpg"
        }, 
        {
          "large": "http://api.randomuser.me/portraits/women/8.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/8.jpg"
        }
      ], 
      "sort": 4
    }, 
    {
      "first_name": "Justin", 
      "individual_id": 35, 
      "inviteProbability": 0.96, 
      "key": 5, 
      "last_name": "Flores", 
      "picture": [
        {
          "large": "http://api.randomuser.me/portraits/women/9.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/9.jpg"
        }, 
        {
          "large": "http://api.randomuser.me/portraits/women/14.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/14.jpg"
        }
      ], 
      "sort": 5
    }, 
    {
      "first_name": "Alan", 
      "individual_id": 6, 
      "inviteProbability": 0.33, 
      "key": 6, 
      "last_name": "Webb", 
      "picture": [
        {
          "large": "http://api.randomuser.me/portraits/women/15.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/15.jpg"
        }, 
        {
          "large": "http://api.randomuser.me/portraits/women/21.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/21.jpg"
        }
      ], 
      "sort": 6
    }, 
    {
      "first_name": "Teresa", 
      "individual_id": 7212, 
      "inviteProbability": 0.32, 
      "key": 7, 
      "last_name": "Parker", 
      "picture": [
        {
          "large": "http://api.randomuser.me/portraits/women/22.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/22.jpg"
        }, 
        {
          "large": "http://api.randomuser.me/portraits/women/23.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/23.jpg"
        }
      ], 
      "sort": 7
    }, 
    {
      "first_name": "Donna", 
      "individual_id": 4238, 
      "inviteProbability": 0.6, 
      "key": 8, 
      "last_name": "Medina", 
      "picture": [
        {
          "large": "http://api.randomuser.me/portraits/women/24.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/24.jpg"
        }, 
        {
          "large": "http://api.randomuser.me/portraits/women/25.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/25.jpg"
        }
      ], 
      "sort": 8
    }, 
    {
      "first_name": "Juan", 
      "individual_id": 3239, 
      "inviteProbability": 0.55, 
      "key": 9, 
      "last_name": "Robinson", 
      "picture": [
        {
          "large": "http://api.randomuser.me/portraits/women/26.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/26.jpg"
        }, 
        {
          "large": "http://api.randomuser.me/portraits/women/27.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/27.jpg"
        }
      ], 
      "sort": 9
    }, 
    {
      "first_name": "Jacqueline", 
      "individual_id": 1310, 
      "inviteProbability": 0.46, 
      "key": 10, 
      "last_name": "Kelley", 
      "picture": [
        {
          "large": "http://api.randomuser.me/portraits/women/28.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/28.jpg"
        }, 
        {
          "large": "http://api.randomuser.me/portraits/women/29.jpg", 
          "medium": "http://api.randomuser.me/portraits/med/women/29.jpg"
        }
      ], 
      "sort": 10
    }
  ]
}