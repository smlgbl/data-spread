var _ = require('lodash');

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

function multiJoin(a1, a2) {
  if(!a1.length) return a2;
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

function fromArrayOfArraysOfObjectsToArrayOfObjects(a) {
  return a.reduce(function(previousValue, currentValue, index, array) {
    return multiJoin(previousValue, currentValue);
  });
}

module.exports = function(obj) {
  if(Object.keys(obj).length > 0) {
    var arrayFromObj = fromObjectOfArraysToArraysOfObjects(obj);
    var arrayOfObjects = fromArrayOfArraysOfObjectsToArrayOfObjects(arrayFromObj);
    return arrayOfObjects;
  } else return [];
};

