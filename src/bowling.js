exports.BowlingGame = class {
  rolls = [];
  roll(pins) {
    this.rolls.push(pins);
  }
  score() {
    return this.rolls.reduce((prev, curr, index) => {
      if (index > 1 && index % 2 === 0) {
        // spare
        if (this.rolls[index - 2] + this.rolls[index - 1] === 10) {
          return prev + curr * 2;
        }
      }
      return prev + curr;
    }, 0);
  }
};
