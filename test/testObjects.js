var spread = require('../index');
var expect = require('must');

describe('Convert Testdata', function() {
  it('Works with empty object', function() {
    var obj = {};
    spread(obj).must.eql([]);
  });

  it('Works with single line object', function() {
    var obj = {
      x: [ 1 ]
    };
    spread(obj).must.eql([{x: 1}]);
  });

  it('Works with multiline object', function() {
    var obj = {
      x: [ 1 ],
      y: [ 2 ]
    };
    spread(obj).must.eql([{x: 1, y: 2}]);
  });

  it('Works with extensive object', function() {
    var obj = {
      x: [ 1, 2, 3 ],
      y: [ 'a', 'b', 'c' ]
    };
    spread(obj).must.eql([
      {x: 1, y: 'a'},
      {x: 1, y: 'b'},
      {x: 1, y: 'c'},
      {x: 2, y: 'a'},
      {x: 2, y: 'b'},
      {x: 2, y: 'c'},
      {x: 3, y: 'a'},
      {x: 3, y: 'b'},
      {x: 3, y: 'c'},
    ]);
  });

  it('Works with even more extensive object', function() {
    var obj = {
      x: [ 1, 2, 3 ],
      y: [ 'a', 'b', 'c' ],
      z: [ 'v', 'w' ]
    };
    spread(obj).must.eql([
      {x: 1, y: 'a', z: 'v'},
      {x: 1, y: 'a', z: 'w'},
      {x: 1, y: 'b', z: 'v'},
      {x: 1, y: 'b', z: 'w'},
      {x: 1, y: 'c', z: 'v'},
      {x: 1, y: 'c', z: 'w'},
      {x: 2, y: 'a', z: 'v'},
      {x: 2, y: 'a', z: 'w'},
      {x: 2, y: 'b', z: 'v'},
      {x: 2, y: 'b', z: 'w'},
      {x: 2, y: 'c', z: 'v'},
      {x: 2, y: 'c', z: 'w'},
      {x: 3, y: 'a', z: 'v'},
      {x: 3, y: 'a', z: 'w'},
      {x: 3, y: 'b', z: 'v'},
      {x: 3, y: 'b', z: 'w'},
      {x: 3, y: 'c', z: 'v'},
      {x: 3, y: 'c', z: 'w'},
    ]);
  });
});
