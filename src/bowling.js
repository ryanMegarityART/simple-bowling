exports.BowlingGame = class {
  rolls = [];

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      // spare
      if (this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10) {
        score +=
          this.rolls[frameIndex] +
          this.rolls[frameIndex + 1] +
          this.rolls[frameIndex + 2];
      } else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
      }
      frameIndex += 2;
    }
    return score;
  }
};
