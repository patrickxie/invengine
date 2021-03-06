var assert = require('assert');
var expect = require('chai').expect;
import AppBar from 'material-ui/lib/app-bar';
import AbsoluteGrid from 'react-absolute-grid';
import ReactTestUtils from 'react-addons-test-utils';

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Test 2:', function() {
  describe('import test', function () {
    it('should be imported as a function', function () {
      assert.equal(typeof(AbsoluteGrid), typeof(s=>s));
    });
  });
});

describe('Test 3:', function() {
  describe('ui test', function () {
    it('should be imported as a function', function () {
      assert.equal(typeof(AppBar), typeof(s=>s));
    });
  });
});

describe('Test 4:', function() {
  describe('ReactTestUtils test', function () {
    it('isElement should equal to boolean ', function () {
      assert.equal(typeof(ReactTestUtils.isElement()), 'boolean');
    });
  });
});

describe('Test 5:', function() {
  describe('AbsoluteGrid test', function () {
    it('should be imported as a function', function () {
      assert.equal(typeof(AbsoluteGrid), 'function');
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