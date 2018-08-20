class Player {
  playTurn(warrior) {
    // Initial values
    const fullHealth = 20;

    // Senses
    const isEmpty = warrior.feel().isEmpty();
    let isEnemy = false;
    let isBound = false;
    if(!isEmpty) {
      isEnemy = warrior.feel().getUnit().isEnemy();
      isBound = warrior.feel().getUnit().isBound();
    }
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
      if(!isEnemy && isBound) {
        warrior.think('Fear not fair maiden I shall save thee!');
        return warrior.rescue();
      }
      warrior.think('Be gone vile demon!');
      warrior.attack();
    }
  }
}
