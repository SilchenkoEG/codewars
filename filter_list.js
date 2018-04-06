function filter_list(l) {
    let a = l.filter(item => typeof(item) !== 'string'  )
    return a;
  }
  filter_list([1,2,'a','b']) // [1,2] 

  // https://www.codewars.com/kata/53dbd5315a3c69eed20002dd