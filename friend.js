function friend(friends){
    friends = friends.filter(item => item.length == 4);
    return friends;
  }
  friend(["Ryan", "Kieran", "Mark"]) //["Ryan", "Mark"]