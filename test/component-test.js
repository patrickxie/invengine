var assert = require('assert');
var expect = require('chai').expect;
// import Index from '../client/pages/Foo';
// import AppBar from 'material-ui/lib/app-bar';
// import AbsoluteGrid from 'react-absolute-grid';
// import ReactTestUtils from 'react-addons-test-utils';


describe('API Test', function() {
  describe('returns sample data', function () {
    it('should return data from Import page & server', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('contacts_data action Test', function() {
  describe('returns sample data', function () {
    it('should return data from Import page & server', function () {
      assert.equal(typeof(Data), 'array');
    });
  });
});


describe('contacts_data reducer Test', function() {
  describe('returns sample data', function () {
    it('should return data from Import page & server', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});



//check the state to make sure there is routing & kittens with the combine reducer
// describe('Test 3:', function() {
//   describe('Combine Reducer Test:', function () {
//     it('state should be formatted: { kittens, routing }', function () {
//       assert.equal((()=>'ayy lmaos')(), 'ayy' + ' lmaos');
//     });
//   });
// });

// describe('Test 4:', function(){
//     describe('store test')
// });




//Async
// describe('User', function() {
//   describe('#save()', function() {
//     it('should save without error', function(done) {
//       var user = new User('Luna');
//       user.save(function(err) {
//         if (err) throw err;
//         done();
//       });
//     });
//   });
// });


//Promise
// beforeEach(function() {
//   return db.clear()
//     .then(function() {
//       return db.save([tobi, loki, jane]);
//     });
// });

// describe('#find()', function() {
//   it('respond with matching records', function() {
//     return db.find({ type: 'User' }).should.eventually.have.length(3);
//   });
// });


// var foo = 'bar';
// let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// expect(foo).to.be.a('string');
// expect(foo).to.equal('bar');
// expect(foo).to.have.length(5);
// expect(beverages).to.have.property('tea').with.length(3);