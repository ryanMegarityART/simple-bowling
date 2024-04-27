exports.BowlingGame = class {
  runningScore = 0;
  numberOfRolls = 0;
  previousRolls = [];
  isSpare = false;
  roll(pins) {
    if (this.isSpare) {
      this.runningScore += pins * 2;
      this.isSpare = false;
    } else {
      this.runningScore += pins;
    }
    if (this.numberOfRolls % 2 === 1) {
      if (this.previousRolls[this.previousRolls.length - 1] + pins === 10) {
        this.isSpare = true;
      }
    }
    this.previousRolls.push(pins);
    this.numberOfRolls++;
  }
  score() {
    return this.runningScore;
  }
};
