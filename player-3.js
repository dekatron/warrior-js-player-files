class Player {
  playTurn(warrior) {
    const startingHealth = 20;
    const isEmpty = warrior.feel().isEmpty();
    const fullHealth = warrior.health() === 20;
    if(isEmpty) {
      if(!fullHealth) {
        warrior.think('Time for a strawberry flavoured health potion!');
        return warrior.rest();
      }
      warrior.think('Onward to glory!');
      warrior.walk();
    } else {
      warrior.think('Be gone vile demon!');
      warrior.attack();
    }
  }
}
