class Player {
  playTurn(warrior) {
    // Initial values
    const fullHealth = 20;
    const lowHealth = 10;
    const directions = [
      'forward',
      'backward'
    ];
    const oppositeDirections = {
      'forward': 'backward',
      'backward': 'forward'
    };

    // Senses
    const senses = {};
    directions.forEach(function(direction) {
      senses[direction] = {
        isWall: warrior.feel(direction).isWall(),
        isEmpty: warrior.feel(direction).isEmpty(),
        isEnemy: false,
        isBound: false
      }
      if(!senses[direction].isEmpty && !senses[direction].isWall) {
        senses[direction].isEnemy = warrior.feel(direction).getUnit().isEnemy(),
        senses[direction].isBound = warrior.feel(direction).getUnit().isBound()
      }
    });

    // Health
    const currentHealth = warrior.health();
    if(!this.health) {
      this.health = fullHealth;
    }
    const beingAttacked = currentHealth < this.health;
    const atFullHealth = currentHealth === fullHealth;
    const isLowHealth = currentHealth <= lowHealth;
    this.health = currentHealth;

    // Actions
    if(senses['forward'].isEmpty) {
      // Take health potion?
      if(!atFullHealth && !beingAttacked) {
        warrior.think('Time for a strawberry flavoured health potion!');
        return warrior.rest();
      }
      // Retreat
      const oppositeDirection = oppositeDirections['forward'];
      if(beingAttacked && isLowHealth && senses[oppositeDirection].isEmpty) {
        warrior.think('Time to bravely run away!');
        return warrior.walk(oppositeDirection);
      }
      // Walk
      warrior.think('Onward to glory!');
      warrior.walk('forward');
    } else {
      // Hit a wall
      if(senses['forward'].isWall) {
        warrior.think('Time for a change of direction!');
        return warrior.pivot();
      }
      // Found a captive
      if(!senses['forward'].isEnemy && senses['forward'].isBound) {
        warrior.think('Fear not fair maiden I shall save thee!');
        return warrior.rescue();
      }
      // Attack stuff
      warrior.think('Be gone vile demon!');
      warrior.attack();
    }
  }
}
