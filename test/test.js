var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Test 2:', function() {
  describe('ayy lmao', function () {
    it('should return ayy lmao', function () {
      assert.equal('ayy lmao', 'ayy' + ' lmaos');
    });
  });
});

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