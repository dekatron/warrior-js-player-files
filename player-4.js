class Player {
  playTurn(warrior) {
    // Initial values
    const fullHealth = 20;

    // Senses
    const isEmpty = warrior.feel().isEmpty();
    const currentHealth = warrior.health();

    // Health
    if(!this.health) {
      this.health = fullHealth;
    }
    const beingAttacked = currentHealth < this.health;
    const atFullHealth = currentHealth === fullHealth;
    this.health = currentHealth;

    // Actions
    if(isEmpty) {
      if(!atFullHealth && !beingAttacked) {
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
