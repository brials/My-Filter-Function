'use strict';

var xObj = {hello: true, goodbye: false}
var x = [1,20,15,4,5,25,66]

function myFilter(arr, callback, thisArg){
  let newArr = [];
  for(let i = 0; i< arr.length; i++){
    if(!thisArg){
      if(callback(arr[i], i, arr)){
        newArr.push(arr[i]);
      }
    }
    if(thisArg){
      var boundCB = callback.bind(thisArg);
      if(boundCB(arr[i], i, arr)){
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

var call1 = function(val, ind, array){
  if(val > 10 && ind < 4){
    return true;
  }
  return false;
}

var call2 = function(val, ind, array){
  if(val > 10 && ind < 4 && this.hello){
    return true;
  }
  return false;
}

console.log(myFilter(x, call1));
console.log(myFilter(x, call2, xObj));
