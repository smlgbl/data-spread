data-spread
===========

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

You see where it is going.
Real-life example will follow.
