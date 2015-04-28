module.exports = {

  first : function (array, n) {
    if (n === undefined){
      return array[0];
    }else{
      return array.slice(0, n);
       // The splice() method adds/removes items to/from an array, and returns the removed item(s).This method changes the original array
    }
  },

//maximum value in the array
  max : function (array) {
  if (array.length === null || array.length === false){
    return -Infinity;
  }else{
    //use reduce and iterate
    return Math.max.apply(Math, array);
    // The Math.max() function returns the largest of zero or more numbers.
    // apply is a convenient way to pass an array of data as parameters to a function.
  }
},

//minimum value in the array
  min : function (array) {
    if (array.length === null || array.length === false){
      return Infinity;
    }else{
      return Math.min.apply(Math, array);
      // The Math.min() function returns the smallest of zero or more numbers.
    }
  },

 //intersection of an array
intersection : function(array, array2){
  var combined = [];

  for (var i = 0; i<array.length; i++){
    for(var j = 0; j<array2.length; j++){
      if(array[i] === array2[j]){
        combined.push(array[i]);
        // The push() method adds new items to the end of an array, and returns the new length.
      }
    }
  }  
  return combined; 
},

//unique array
unique : function (array){
  var newArray = [];
  var unique = {};
  var ok = "";

  for(var i = 0; i<array.length; i++){
    if(unique.hasOwnProperty(array[i])){
      // The hasOwnProperty method returns true if object has a property of the specified name, false if it does not.
      unique[array[i]]++;
    }else{
      unique[array[i]] = 1;
    }
  }
  for (var key in unique){
    if(unique[key] === 1){
    ok = parseInt(key);
    // The parseInt() function parses a string and returns an integer.
     newArray.push(ok);
    }
  }
  return newArray;
},


 //difference of an array
 difference : function(array, array2){
  for(var i = 0; i<array.length; i++){
    for(var j = 0; j<array2.length; j++){
      if(array[i] === array2[j]){
        array.splice(i, 1);
        // The splice() method adds/removes items to/from an array, and returns the removed item(s).This method changes the original array
      }
    }
  }
  return array;
},  


//contains of an array
contains : function (array, target){
  if(array.indexOf(target)=== -1){
    // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    return false;
  }else{
    return true;
  }
 }
};