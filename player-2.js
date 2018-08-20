class Player {
  playTurn(warrior) {
    const isEmpty = warrior.feel().isEmpty();
    if(isEmpty) {
      warrior.think('Onward to glory!');
      warrior.walk();
    } else {
      warrior.think('Be gone vile demon!');
      warrior.attack();
    }
  }
}
