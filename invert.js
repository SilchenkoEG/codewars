function invert(array) {
    array = array.map(item => item === 0 ? item : -item)
     return(array)  ;
  }
  invert([1,2,3,-4,0]); // [-1,-2,-3,4,0]


  // https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad