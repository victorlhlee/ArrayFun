module.exports = {

  first : function ( array, n) {
    if (n === undefined){
      return array[0];
    }else{
      return array.slice(0, n);
    }
  },

//maximum value in the array
  max : function (array) {
  if (array.length === null || array.length === false){
    return -Infinity;
  }else{
    return Math.max.apply(Math, array);
  }
},

//minimum value in the array
  min : function (array) {
    if (array.length === null || array.length === false){
      return Infinity;
    }else{
      return Math.min.apply(Math, array);
    }
  }
 };