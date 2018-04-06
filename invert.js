function invert(array) {
    array = array.map(item => item === 0 ? item : -item)
     return(array)  ;
  }
  invert([1,2,3,-4,0]); // [-1,-2,-3,4,0]