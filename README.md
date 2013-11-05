data-spread
===========
[![Build Status](https://travis-ci.org/smlgbl/data-spread.png)](https://travis-ci.org/smlgbl/data-spread)

Converts an object of named arrays into an array of objects

This is meant especially for data-driven testing, but might be useful somewhere else as well.

You write this:

```javascript
var obj = {
  country: [ 'de', 'en', 'it', 'pl', 'fr' ],
  version: [ 1, 2, 3 ]
};
```

what you get is this:

```javascript
  [
    { country: 'de', version: 1 },
    { country: 'de', version: 2 },
    { country: 'de', version: 3 },
    { country: 'en', version: 1 },
    { country: 'en', version: 2 },
    { country: 'en', version: 3 },
    { country: 'it', version: 1 },
    { country: 'it', version: 2 },
    { country: 'it', version: 3 },
    { country: 'pl', version: 1 },
    { country: 'pl', version: 2 },
    { country: 'pl', version: 3 },
    { country: 'fr', version: 1 },
    { country: 'fr', version: 2 },
    { country: 'fr', version: 3 }
  ]
```

Real-life example

Writing [mocha.js](http://visionmedia.github.io/mocha/) tests for a REST API, with different versions and different countries.

```javascript
var spread = require('data-spread');
var expect = require('must');

describe('Test the API per country and version', function() {
  var testData = { 
    version: ['v1', 'v2'],
    country: ['de', 'en', 'it', 'pl', 'fr', 'es']
  };

  var spreadData = spread(testData);
  spreadData.forEach(function(data) {
    it('Check existence of offers in ' + data.country + ' on version ' + data.version, function(done) {
      api.get(server.url + data.version + '/exists/' + data.country, function(res) {
        res.body.must.eql({value: true});
      });
    });
  });

});
```

Or, if you're using [fluentsoftware/data-driven](https://github.com/fluentsoftware/data-driven) (or even my [fork](https://github.com/smlgbl/data-driven) )

```javascript
var spread = require('data-spread');
var expect = require('must');
var dd = require('data-driven');

describe('Test the API per country and version', function() {
  var testData = { 
    version: ['v1', 'v2'],
    country: ['de', 'en', 'it', 'pl', 'fr', 'es']
  };

  var spreadData = spread(testData);

  dd(spreadData, function() {
    it('Check existence of offers in {country} with version {version}', function(data, done) {
      api.get(server.url + data.version + '/exists/' + data.country, function(res) {
        res.body.must.eql({value: true});
      });
    });
  });

});
```
