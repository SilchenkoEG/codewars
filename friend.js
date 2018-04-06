function friend(friends){
    friends = friends.filter(item => item.length == 4);
    return friends;
  }
  friend(["Ryan", "Kieran", "Mark"]) //["Ryan", "Mark"]


  // https://www.codewars.com/kata/55b42574ff091733d900002f