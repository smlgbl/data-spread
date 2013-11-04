var _ = require('lodash');

// From {name: [x ,y, z] } to [ [ {name: x}, {name: y}, {name: z}]]
function fromObjectOfArraysToArraysOfObjects(o) {
  var arrayOfObjectArrays = [];
  for(var key in o) {
    var arrayOfObjects = [];
    for(var elem in o[key]) {
      var dataSet = {};
      dataSet[key] = o[key][elem];
      arrayOfObjects.push(dataSet);
    }
    arrayOfObjectArrays.push(arrayOfObjects);
  }
  return arrayOfObjectArrays;
}

function extendEachWithEach(a1, a2) {
  var joinedArray = [];
  for(var elemA1 in a1) {
    for(var elemA2 in a2) {
      var dataSet = {};
      _.extend(dataSet, a1[elemA1]);
      _.extend(dataSet, a2[elemA2]);
      joinedArray.push(dataSet);
    }
  }
  return joinedArray;
}

//  Join all Arrays into one
function fromArrayOfArraysOfObjectsToArrayOfObjects(a) {
  if(a.length <= 0) {
    return a;
  } else {
    return a.reduce(function(previousValue, currentValue, index, array) {
      return extendEachWithEach(previousValue, currentValue);
    });
  }
}

module.exports = function(obj) {
    var arrayFromObj = fromObjectOfArraysToArraysOfObjects(obj);
    var arrayOfObjects = fromArrayOfArraysOfObjectsToArrayOfObjects(arrayFromObj);
    return arrayOfObjects;
};

